const { query } = require("../index");

const bootcamperSeedData = [
  {
    name: "Amelia",
    bio: "I like colour yellow, worked in churches",
    interested_industry: "front end and UX",
    interests: "running,gardening",
    mentors_I_Like: ["id1", "id17"],
  },
];

async function addToBootcampersTable() {
  const sqlStatement = ` INSERT INTO bootcampers (name,bio,interested_industry,interests,mentors_I_Like) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;

  const result = await query(sqlStatement, [
    bootcamperSeedData[0].name,
    bootcamperSeedData[0].bio,
    bootcamperSeedData[0].interested_industry,
    bootcamperSeedData[0].interests,
    bootcamperSeedData[0].mentors_I_Like,
  ]);

  console.log(result.rows[0]);
  
}
addToBootcampersTable();
