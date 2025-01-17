import oracledb from "oracledb";

const config = {
  user: "BD8124",
  password: "BD8124",
  connectString: "localhost:1521/XEPDB1",
};

export async function getEmployee(empId) {
  let conn;

  try {
    conn = await oracledb.getConnection(config);
    console.log("Connected to database");

    const result = await conn.execute("select * from s_emp where ID = :id", [
      empId,
    ]);

    console.log(result.rows[0]);
  } catch (err) {
    console.log("No se conecto!, lo siento :(\n", err);
  } finally {
    if (conn) {
      // conn assignment worked, need to close
      await conn.close();
    }
  }
}
