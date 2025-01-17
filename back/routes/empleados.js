import { Router } from "express";

import oracledb from "oracledb";
import environment from "../environment.js";

var router = Router();

/* GET empleado por ID. */
router.get("/:id", async (req, res, next) => {
  let conn;

  try {
    conn = await oracledb.getConnection(environment.config);
    const result = await conn.execute("select * from s_emp where ID = :id", [
      req.params.id,
    ]);
    res.send(result.rows[0]);
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    if (conn) {
      // conn assignment worked, need to close
      await conn.close();
    }
  }
});

export default router;
