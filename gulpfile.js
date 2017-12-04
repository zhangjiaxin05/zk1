var gulp = require('gulp');
var webserver = require('gulp-webserver');


var data = [
    {
        "img":"<img src='images/1.gif'>",
        "p1":"百度",
        "p2":"北京市海淀区西北旺",
        "p3":"互联网 | 已上市 | 10000人以上",
        "p4":"热招： <span>前端工程师</span>等2382个职位"
    },
    {
        "img":"<img src='images/1.gif'>",
        "p1":"百度",
        "p2":"北京市海淀区西北旺",
        "p3":"互联网 | 已上市 | 10000人以上",
        "p4":"热招： <span>前端工程师</span>等2382个职位"
    },
    {
        "img":"<img src='images/1.gif'>",
        "p1":"百度",
        "p2":"北京市海淀区西北旺",
        "p3":"互联网 | 已上市 | 10000人以上",
        "p4":"热招： <span>前端工程师</span>等2382个职位"
    },
    {
        "img":"<img src='images/1.gif'>",
        "p1":"百度",
        "p2":"北京市海淀区西北旺",
        "p3":"互联网 | 已上市 | 10000人以上",
        "p4":"热招： <span>前端工程师</span>等2382个职位"
    }
]

gulp.task('webserver',function(){
    gulp.src('./')
    .pipe(webserver({
        host: "localhost",
        port: 8090,
        open: true,
        fallback: "index.html",
        livereload: true
    }))
})
gulp.task('user',function(){
    gulp.src('./')
    .pipe(webserver({
        host:'localhost',
        port:8000,
        middleware:function(req,res){
            res.writeHead(200, {
                "Content-type": "text/json;charset=utf8",
                "Access-Control-Allow-Origin": "*"
            });
            res.end(JSON.stringify(data));
        }
    }))
})
gulp.task('default',function(){
    gulp.start('webserver','user')
})