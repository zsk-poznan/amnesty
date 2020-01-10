const express = require('express');
const sql = require('mssql');
const router = express.Router();
const people = require('../pplDummyDatabase'); //z bazy pobrane

router.get("/total", async (req, res) => {
    try {
        var config = {
          user: "sa",
          password: "1@qwerty",
          server: "192.168.221.27",
          database: "Amnesty2019"
        }
        sql.connect(config).then(function(err) {
          var request = new sql.Request()
          request.query('select Sum(st.ilosc) as amount from dbo.stat_ofiara st').then(x => {
            res.status(200).json({
              data: x.recordset[0].amount
            });
          })
        })
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });
  // router.post('/post', async (req, res) => {
  //   let arrayId = students.findIndex(student => student.id === req.body.id );
  //   students[arrayId].canteen = req.body.canteen; //tu zamiast przypisania do tablicy bedzie kwerenda do sql co ma zedytowac to w bazie
  // });

  module.exports = router;