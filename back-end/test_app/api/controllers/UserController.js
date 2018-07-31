


module.exports = {


  /**
   * Check the provided email address and password, and if they
   * match a real user in the database, sign in to Activity Overlord.
   */

   login: function (req, res) {

      return res.json({"status": 200});

   },


  signup: function(req, res) {
    var values = req.allParams();
      console.log("values", values);
      sails.log("values", values);
    student.create(values, function userCreated(err, newUser) {
      if (err) {
        // Otherwise, send back something reasonable as our error response.
        return res.json({"status": 500});
      }

      // Send back the id of the new user
      return res.json({"status": 200, "user": newUser});
    });

  } // end signup

};
