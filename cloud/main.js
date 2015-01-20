/**
* 'Feed'の全レコードを取得し、feedUrlカラムに保存されているURLに順次アクセスする
*/

// jobメソッドの第一引数に指定した名前のジョブが作成される。
Parse.Cloud.job("lineup", function(request, status) {
    var feedQuery = new Parse.Query("Feed");
    feedQuery.find({
        success: function(results) {
            var length = results.length; 

            // ロックオブジェクト
            var LOCK = 0;
            for (var i = 0; i < length; i++) {
                var feed = results[i];
                var feedUrl = feed.get('feedUrl');
                // httpリクエスト
                Parse.Cloud.httpRequest({
                    url: feedUrl,
                    success: function(response) {
                        console.log(response.text);
                        LOCK++;
                        if (LOCK == length) {
                            // status.successが呼ばれた時点で処理が終了する
                            status.success("success httpRequest");
                        }
                    },
                    error: function(response) {
                        console.error(response.status);
                        LOCK++;
                        if (LOCK == length) {
                            status.error("Error Http Request");
                        }
                    }
                });
            }
        },
        error: function(error) {
            console.error(error.message);
            status.error(error.message);
        }
    });

});
