module.exports = function (app, db) {
  app.post("/user", (req, res) => {
    res.send("Hello");
  });
};
