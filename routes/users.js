const express = require('express');

const router = express.Router();

//@route         POST api/users
//@description   REGISTER USER
//@access        Public
router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
