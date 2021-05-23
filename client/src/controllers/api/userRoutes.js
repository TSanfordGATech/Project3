//this might be importing the wrong router? -Heather
const router = require('express').Router();
const User = require('./../../models/User');

// import SignUp from "../../client/src/component/SignUp/index";
// const session = require('session');

//POST /api/users
router.post('/', async (req, res) => {
  console.log('hit signup route!');
  try {
    //TODO: req.body is null right now
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//POST /api/users/login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
    const validPassword = await userData.checkPassword(req.body.password);
    
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//POST /api/users/logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//GET /api/users/auth
router.get('/auth', (req, res) => {
  if (req.session.logged_in) {
    res.json({
      logged_in: true,
      id: req.session.user_id
    });
  } else {
    res.json({
      logged_in: false
    });
  }
});

module.exports = router;
