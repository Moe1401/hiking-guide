
const seedUsers = require('./userSeed');
const seedTrails = require('./trailSeed');
const seedHikes = require('./hikeSeed');
const seedComments = require('./commentsSeed');

async function seedData() {
  try {
    await seedUsers();
    await seedTrails();
    await seedHikes();
    await seedComments();
    console.log('All seed data successfully executed!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}
seedData();


