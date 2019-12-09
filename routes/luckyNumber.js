const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

router.get("/luckyNumber", async (req, res) => {
    try {
        res.status(200).json({
            data: 16 //z bazy bedzie pobrane
        });
    } catch (err) {
      res.status(400).json({
        message: "Some error occured",
        err
      });
    }
  });


  module.exports = router;