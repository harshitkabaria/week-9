module.exports = function(http) {
    http.listen(3000, () => {
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      console.log("Server has been started at : " + h + ":" + m);
    });
  };