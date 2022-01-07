var http = require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것이다. url의 변수를 사용해서 진행할 것이다.
var app = http.createServer(function(request,response){
    var _url = request.url;
    console.log(_url);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + _url));
 
});
app.listen(3000);``