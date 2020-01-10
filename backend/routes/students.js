const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const students = require('../dummyStudentsDatabase'); //z bazy pobrane
const app = express();

router.get("/list", async (req, res) => {
    try {
        let place = students.filter(student => student.canteen === false );
        res.status(200).json({
            data: place
        });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });

  router.get("/canteen", async (req, res) => {
      try {
        let place = students.filter(student => student.canteen === true );
        res.status(200).json({
            data: place
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
  });

  router.post('/post', async (req, res) => {
    let arrayId = students.findIndex(student => student.id === req.body.id );
    students[arrayId].canteen = req.body.canteen; //tu zamiast przypisania do tablicy bedzie kwerenda do sql co ma zedytowac to w bazie
  });

  module.exports = router;