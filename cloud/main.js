
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("averageStars", function(request, response) {
    var query = new Parse.Query("Article");
    query.equalTo("click", request.params.click);
    query.find({
        success: function(results) {
            var sum = 0;
            console.log(results);
            for (var i = 0; i < results.length; ++i) {
                sum += results[i].get("click");
            }
            response.success(results.length);
        },
        error: function() {
            response.error("moview lookup failed");
        }
    });
});
