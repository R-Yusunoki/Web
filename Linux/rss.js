const express = require("express");
const https = require("https");
const XMLparse = require("xml2js").parseString;
const app = express();

app.use(express.static("/home/pserver/forserve/public"));

app.get("/rss",function(req,res){
    const opt = {
        host:"news.google.com",
        port:443,
        path:"/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtcGhHZ0pLVUNnQVAB?hl=ja&amp;gl=JP&amp;ceid=JP:ja&amp;oc=11&gl=JP&ceid=JP:ja"
    }
    https.get(opt,function(res2){
        let news = "";
        res2.on("data",function(data){
            news += data;
        });
        res2.on("end",function(){
            XMLparse(news,function(err,result){
                console.log(result);
                res.send(result.rss.channel[0].item);
            });

        });
    });

});

app.listen(80, function () {
  console.log("Starting server on port 80");
});
