import { neo4j } from 'neo4j-driver';
import fs from 'fs';
import { parse } from 'csv-parse';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const driver = neo4j.driver(
    process.env.NEO4J_URI || 'bolt://localhost:7687',
    neo4j.auth.basic(
      process.env.NEO4J_USER || 'neo4j',
      process.env.NEO4J_PASSWORD || 'password'
    )
  );

  const session = driver.session();

  try {
    // Read the CSV file
    const csvPath = path.join(process.cwd(), 'src', 'misc', 'Connexit_list_unDpulicated.csv');
    const fileContent = fs.readFileSync(csvPath, 'utf-8');

    // Parse CSV
    const records = await new Promise((resolve, reject) => {
      parse(fileContent, {
        columns: true,
        skip_empty_lines: true
      }, (err, records) => {
        if (err) reject(err);
        else resolve(records);
      });
    });

    // Create constraints and indexes
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

    res.status(200).json({ message: 'CSV data uploaded successfully' });
  } catch (error) {
    console.error('Error uploading CSV:', error);
    res.status(500).json({ message: 'Error uploading CSV', error: error.message });
  } finally {
    await session.close();
    await driver.close();
  }
}
