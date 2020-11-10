const { query } = require("../index");

const sqlStatementDropTable = `DROP TABLE IF EXISTS mentors`;

async function dropMentorsTable() {
  const result = query(sqlStatementDropTable);
  console.log("mentors table was dropped");
}

dropMentorsTable();
