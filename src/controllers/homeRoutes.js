const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User } = require("../../src/models/User");

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      // res.redirect('/profile');
      return;
    }
    res.render('login');
  });

  router.get("/profile", withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ["password"] },
      });
      // const dreamData = await Dream.findAll({
      //   where: {
      //     user_id: userData.id
      //   }
      // })
  
      const user = userData.get({ plain: true });
      // const sign = zodiac.getSignByDate({ day: userData.day, month: userData.month })
      // const dreams = dreamData.map((dream) => dream.get({ plain: true }));
  
      // res.render("profile", {
      //   ...user,
      //   logged_in: true,
      // });
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
