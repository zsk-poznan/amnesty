const express = require('express');
const sql = require('mssql');
const router = express.Router();
const people = require('../pplDummyDatabase'); //z bazy pobrane

router.get("/rank", async (req, res) => {
    try {
            res.status(200).json({
              data: [
                { name: 'Młodzież z Grassy Narrows', amount: 24 },
                { name: 'Ibrahim Ezz El-Din', amount: 86 },
                { name: 'José Adrián', amount: 97 },
                { name: 'Nasu Abdulaziz', amount: 112 },
                { name: 'Magai Matiop Ngong', amount: 23 },
                { name: 'Emil Ostrowko', amount: 44 },
                { name: 'Sarah Mardini i Seán Binder', amount: 33 },
                { name: 'Yiliyasijiang Reheman', amount: 45 },
                { name: 'Marinel Sumook Ubaldo', amount: 31 },
                { name: 'Yasaman Aryani', amount: 28 },
             ]
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