// Use Parse.Cloud.define to define as many cloud functions as you want.
Parse.Cloud.job("lineup", function(request, status) {
    Parse.Cloud.httpRequest({
        url: 'http://animemap.net/api/table/tokyo.json',
        success: function(response) {
            var body = JSON.parse(response.text);
            console.log(body);
            status.success("parse animap");
        },
        error: function(response) {
            status.error(response);
        }
    });
});
