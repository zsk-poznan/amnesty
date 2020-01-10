const express = require('express');
const sql = require('mssql');
const router = express.Router();
const people = require('../pplDummyDatabase'); //z bazy pobrane

router.get("/rank", async (req, res) => {
    try {
            res.status(200).json({
              data: [ { name: "2E", amount: 104 }, { name: "2A", amount: 12 }, { name: "3A", amount: 11 }, { name: "1A", amount: 10 }, { name: "1GA", amount: 9 } ]
            });
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