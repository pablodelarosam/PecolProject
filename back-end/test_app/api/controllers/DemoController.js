
module.exports = {

  example: function(req, res) {

      sails.log("ok")

        return res.json({"status": 200});
  }

};
