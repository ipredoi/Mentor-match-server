const { query } = require("../db/index");

async function readDataFromBootcampersTable() {
  const sqlStatement = `SELECT * FROM bootcampers`;
  const result = await query(sqlStatement);
  return result.rows;
}

async function readDataFromMentorsTable() {
  const sqlStatement = `SELECT * FROM mentors`;
  const result = await query(sqlStatement);
  return result.rows;
}

async function addToBootcampersTable(bootcamper) {
  const sqlStatement = ` INSERT INTO bootcampers (name,bio,interested_industry,interests,mentors_I_Like) VALUES ($1,$2,$3,$4,$5) RETURNING *;`;

  const result = await query(sqlStatement, [
    bootcamper.name,
    bootcamper.bio,
    bootcamper.interested_industry,
    bootcamper.interests,
    bootcamper.mentors_I_Like,
  ]);

  return result.rows[0];
}

async function addToMentorsTable(mentor) {
  const sqlStatement = ` INSERT INTO mentors (name,bio,coding_languages,speciality_language,industry,current_business,present_role,role_description,interests,previous_bootcamper) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *;`;

  const result = await query(sqlStatement, [
    mentor.name,
    mentor.bio,
    mentor.coding_languages,
    mentor.speciality_language,
    mentor.industry,
    mentor.current_business,
    mentor.present_role,
    mentor.role_description,
    mentor.interests,
    mentor.previous_bootcamper,
  ]);

  return result.rows[0];
}

module.exports = {
  readDataFromBootcampersTable,
  readDataFromMentorsTable,
  addToBootcampersTable,
  addToMentorsTable,
};
