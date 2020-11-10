const { query } = require("../index");

const sqlStatement = `CREATE TABLE bootcampers(
    id serial PRIMARY KEY,
    name VARCHAR (100) NOT NULL, 
    bio VARCHAR (500) NOT NULL, 
    interested_industry VARCHAR (100),  
    interests VARCHAR (200),
    mentors_I_Like TEXT[]
    
);`;

async function createBootcampersTable() {
  const result = await query(sqlStatement);
  console.log(result);
}

createBootcampersTable();
