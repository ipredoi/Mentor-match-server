const { query } = require("../index");

const sqlStatement = `CREATE TABLE mentors(
    id serial PRIMARY KEY, 
    name VARCHAR(100) NOT NULL,
    bio  VARCHAR(500) NOT NULL,
    coding_languages TEXT NOT NULL, 
    speciality_language TEXT, 
    industry TEXT NOT NULL,
    current_business TEXT,
    present_role TEXT,
    role_description VARCHAR(300),
    interests VARCHAR(200) NOT NULL, 
    previous_bootcamper BOOLEAN
    
);`;

async function createMentorsTable() {
  const result = await query(sqlStatement);
  console.log(result);
}

createMentorsTable();
