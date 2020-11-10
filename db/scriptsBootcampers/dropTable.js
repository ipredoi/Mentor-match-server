const { query } = require("../index");

const sqlStatementDropTable = `DROP TABLE IF EXISTS bootcampers`;

async function dropBootcampersTable() {
  const result = query(sqlStatementDropTable);
  console.log("bootcampers table was dropped");
}

dropBootcampersTable();
