const { query } = require("../index");

const mentorsSeedData = [
  {
    name: "Chirs Watkins",
    bio: "Former engineer, now developer",
    coding_languages: "JS, NODE, SQl",
    speciality_language: "SQL",
    industry: "fashion, retail",
    current_business: "Bravissimo",
    present_role: "Software engineer",
    role_description: "Developing business systems",
    interests: " gaming, football, cooking",
    previous_bootcamper: false,
  },
];

async function addTomentorssTable() {
  const sqlStatement = ` INSERT INTO mentors (name,bio,coding_languages,speciality_language,industry,current_business,present_role,role_description,interests,previous_bootcamper) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *;`;

  const result = await query(sqlStatement, [
    mentorsSeedData[0].name,
    mentorsSeedData[0].bio,
    mentorsSeedData[0].coding_languages,
    mentorsSeedData[0].speciality_language,
    mentorsSeedData[0].industry,
    mentorsSeedData[0].current_business,
    mentorsSeedData[0].present_role,
    mentorsSeedData[0].role_description,
    mentorsSeedData[0].interests,
    mentorsSeedData[0].previous_bootcamper,
  ]);

  console.log(result.rows[0]);
}
addTomentorssTable();
