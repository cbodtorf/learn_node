const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const wes = { name: 'wes', age: 100, cool: true };
  // res.send('Hey! It works!');
  // res.json(wes);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'wes',
    dog: req.query.dog || 'snickers'
  });
});

// params example (reverse string);
router.get('/reverse/:name', (req,res) => {
  // const rev = req.params.name.split('').reverse().join('');
  const rev = [...req.params.name].reverse().join('');
  res.json(rev);
})

// PUG templating language (used to be called jade)

module.exports = router;
