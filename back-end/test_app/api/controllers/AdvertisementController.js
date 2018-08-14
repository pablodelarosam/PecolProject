module.exports = {

  addAdvertisement: function(req, res) {
    var values = req.allParams();
      console.log("values", values);
      sails.log("values", values);
    advertisement.create(values, function userCreated(err, newUser) {
      if (err) {
        // Otherwise, send back something reasonable as our error response.
        return res.json({"status": 500});
      }

      // Send back the id of the new user
      return res.json({"status": 200, "user": newUser});
    });
  }
};
