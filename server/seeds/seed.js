
const seedUsers = require('./userSeed');
const seedTrails = require('./trailSeed');
const seedHikes = require('./hikeSeed');
const seedComments = require('./commentsSeed');
const { connection } = require('mongoose');

async function seedData() {
  try {
    await seedTrails();
    await seedHikes();
    await seedComments();
    await seedUsers();
    console.log('All seed data successfully executed!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await connection.close();
  }
}
seedData();



