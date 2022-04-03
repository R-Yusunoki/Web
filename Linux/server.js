//Node.js, Express, socketIO の準備
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketIO(server);

//サーバーへのアクセスへの待機
app.use(express.static("/home/pserver/forserve/public")); //静的ファイルを返す。
app.use("/count",express.urlencoded({ extended: true })); //POSTリクエストからテキストを取り出すメソッドを実行。

//文字数カウントアプリからのリクエストへの待機
app.post("/count", function (req, res) {
  let len = req.body.name.length;
  res.send(String(len));
});

//チャットでのクライアントからの接続への待機
io.on("connection", function (socket) {
  console.log("socket connected");

  //　チャットテキスト受信後、全クライアントへ送る。
  socket.on("new_message", function (receive) {
    io.emit("spread_message", receive);
  });
});

//サーバー起動
server.listen(80, function () {
  console.log("Starting server on port 80");
});
