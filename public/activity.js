var connectoin = new Postmonger.Session();

connectoin.Trigger("ready");

connectoin.on("initActivity", function (data) {
  document.getElementById("configuration").value = JSON.stringify(
    data,
    null,
    2
  );
});

connectoin.on("clickedNext", function () {
  var configuration = JSON.parse(
    document.getElementById("configuration").value
  );
  connectoin.trigger("updateActivity", configuration);
});
