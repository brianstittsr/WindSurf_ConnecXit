const express = require('express');
const router = express.Router();
const { getSession } = require('../config/neo4j');

// Get all vendors or filter by category
router.get('/', async (req, res) => {
  const session = getSession();
  const { category } = req.query;

  try {
    let query;
    let params = {};

    if (category) {
      query = `
        MATCH (v:Vendor)-[:BELONGS_TO]->(c:Category)
        WHERE c.name = $category
        RETURN v
      `;
      params = { category };
    } else {
      query = `
        MATCH (v:Vendor)
        RETURN v
      `;
    }

    const result = await session.run(query, params);
    const vendors = result.records.map(record => {
      const vendor = record.get('v').properties;
      return {
        ...vendor,
        rating: parseFloat(vendor.rating || '4.5').toFixed(1),
        reviewCount: parseInt(vendor.reviewCount || Math.floor(Math.random() * 50) + 10),
        price: parseInt(vendor.price || Math.floor(Math.random() * 3) + 1) * 100,
        contact: {
          email: vendor.contactEmail,
          phone: vendor.contactPhone
        },
        location: {
          latitude: vendor.latitude,
          longitude: vendor.longitude
        }
      };
    });

    res.json(vendors);
  } catch (error) {
    console.error('Error fetching vendors:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await session.close();
  }
});

// Get vendor by ID
router.get('/:id', async (req, res) => {
  const session = getSession();
  const { id } = req.params;

  try {
    const query = `
      MATCH (v:Vendor)
      WHERE v.id = $id
      RETURN v
    `;

    const result = await session.run(query, { id });

    if (result.records.length === 0) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    const vendor = result.records[0].get('v').properties;
    res.json({
      ...vendor,
      rating: parseFloat(vendor.rating || '4.5').toFixed(1),
      reviewCount: parseInt(vendor.reviewCount || Math.floor(Math.random() * 50) + 10),
      price: parseInt(vendor.price || Math.floor(Math.random() * 3) + 1) * 100,
      contact: {
        email: vendor.contactEmail,
        phone: vendor.contactPhone
      },
      location: {
        latitude: vendor.latitude,
        longitude: vendor.longitude
      }
    });
  } catch (error) {
    console.error('Error fetching vendor details:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await session.close();
  }
});

module.exports = router;
