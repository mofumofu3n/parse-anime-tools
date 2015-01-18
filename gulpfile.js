var gulp = require("gulp");
var exec = require('child_process').exec;

// Parse.comにデプロイ
gulp.task("deploy", function() {
    exec('parse deploy', function(err, stdout, stderr) {
        if (!err) {
            console.log(stdout);
            console.log(stderr);
        } else {
            console.log(err);
        }
    });
});

gulp.task("default", function() {
    // ファイルを監視し、変更が加えられたらタスクを実行する
    gulp.watch(["cloud/*.js"], ["deploy"]);
});
