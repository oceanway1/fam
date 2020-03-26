const express = require('express');
const router = express.Router();

module.exports = (famRep) => {
  router.get('/', async (reg, res) => {

    try {
      const [members] = await Promise.all([await famRep.getAllUser()])
      console.log(members)
      res.send(members)
    } catch (error) {
      console.error(error);

    }
    // res.send(members)
  })
 return router;
}
