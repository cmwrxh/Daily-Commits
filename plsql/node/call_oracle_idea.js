// Node.js + Oracle idea (not running yet, just thinking/learning)
// I'm really bad at drivers and connections right now, but practicing

const oracledb = require('oracledb');  // npm install oracledb

async function idea() {
  let connection;
  try {
    // someday this will actually connect...
    connection = await oracledb.getConnection({
      user: "your_username",
      password: "your_password",
      connectString: "localhost/orcl"  // or whatever your db is
    });

    console.log("Connected! (one day...)");

    // Future dream: call the PL/SQL procedure
    // await connection.execute("BEGIN say_hello('Alenti'); END;");

  } catch (err) {
    console.error("Error (as usual):", err);
  } finally {
    if (connection) {
      try { await connection.close(); } catch (e) {}
    }
  }
}

idea();
