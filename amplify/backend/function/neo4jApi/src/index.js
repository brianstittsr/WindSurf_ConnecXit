const neo4j = require('neo4j-driver');
const csv = require('csv-parse');

let driver;

const initDriver = () => {
  if (!driver) {
    driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
    );
  }
  return driver;
};

exports.handler = async (event) => {
  try {
    const { httpMethod, path, body } = event;
    const driver = initDriver();
    const session = driver.session();

    try {
      switch (path) {
        case '/upload-csv':
          if (httpMethod !== 'POST') {
            return {
              statusCode: 405,
              body: JSON.stringify({ message: 'Method not allowed' })
            };
          }

          const records = await new Promise((resolve, reject) => {
            csv.parse(body, {
              columns: true,
              skip_empty_lines: true
            }, (err, records) => {
              if (err) reject(err);
              else resolve(records);
            });
          });

          // Create constraints
          await session.run('CREATE CONSTRAINT IF NOT EXISTS FOR (c:CXCompany) REQUIRE c.name IS UNIQUE');

          // Upload records
          for (const record of records) {
            await session.run(
              `
              MERGE (c:CXCompany {name: $name})
              SET c = $properties
              `,
              {
                name: record.name,
                properties: record
              }
            );
          }

          return {
            statusCode: 200,
            body: JSON.stringify({ message: 'CSV data uploaded successfully' })
          };

        case '/search':
          if (httpMethod !== 'GET') {
            return {
              statusCode: 405,
              body: JSON.stringify({ message: 'Method not allowed' })
            };
          }

          const { query } = event.queryStringParameters || {};
          const result = await session.run(
            `
            MATCH (c:CXCompany)
            WHERE c.name CONTAINS $query
            RETURN c
            LIMIT 10
            `,
            { query: query || '' }
          );

          return {
            statusCode: 200,
            body: JSON.stringify({
              companies: result.records.map(record => record.get('c').properties)
            })
          };

        default:
          return {
            statusCode: 404,
            body: JSON.stringify({ message: 'Not found' })
          };
      }
    } finally {
      await session.close();
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error', error: error.message })
    };
  }
};
