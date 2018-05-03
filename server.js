/**
Include express
**/

var express  = require ("express");
var app = express();

/**
Socket io application
**/
var server = require ("http").Server(app);
var io = require('socket.io')(server);
var PORT = 3000;

server.listen(PORT, function(){
  console.log('Listening'+ PORT + '...');
});

app.get('/', function(request, response){ // слэш - это route ( в localhost) ; get - обычный запрос в браузере, post - пост запрос
  response.sendFile(__dirname + '/index.html');
});

app.use('/public', express.static('public'));

io.on('connection', function(socket){//on позволяет ссылаться на любое событие

  

  socket.on("user moved", function(data){

    console.log('user moved', data);

    socket.broadcast.emit("someone moved", data)
  });
});
