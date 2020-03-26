const express = require('express');
const router = express.Router();

module.exports = (famRepository) => {

  router.get('/', async (req, res) =>{
    try {
      const members = await famRepository.getAllFamMembers();
      console.log(members.rows);
      res.send(members.rows)
    } catch (error) {
      console.error(error)
    }
  })

  return router;
}