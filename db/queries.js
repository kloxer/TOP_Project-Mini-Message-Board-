const pool = require("./pool"); // Get the connection

async function getAllMessages(){
    const query = `
    SELECT usernames.username, messages.message, TO_CHAR(created_at, 'FMMonth DD, YYYY HH12:MI AM') AS formatted_created_at
    FROM messages
    INNER JOIN usernames
    ON messages.usernameid = usernames.id;
    `
;
    const {rows} = await pool.query(query);
    return rows;
}

async function addMesage(user, msg){
const query = `
WITH inserted_user AS (
  INSERT INTO usernames(username) 
  VALUES ($1) 
  RETURNING id
)
INSERT INTO messages(usernameid, message) 
VALUES ((SELECT id FROM inserted_user), $2)
`;

    await pool.query(query, [user, msg])
}

module.exports ={ getAllMessages, addMesage }