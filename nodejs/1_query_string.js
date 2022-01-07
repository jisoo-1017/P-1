//목표 query string의 값을 변경하여 사용자가 원하는 데이터를 출력해보자.
//url의 값을 추출하여 원하는 값을 얻어올 수 있다. 
//require은 모듈을 사용할 것이라고 nodejs에게 알려주고 변수를 통해서 모듈을 사용한다고 선언하는 것이다.
var http = require('http');
var fs = require('fs');
var url = require('url');//url이라는 모듈을 사용할 것이다. url의 변수를 사용해서 진행할 것이다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    console.log(queryData.id); //queryData안에 담겨있는 데이터는 객체이다.
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    //fs.readFileSync(__dirname + _url)-사용자가 접속한 url에 따라서 html폴더 안 파일을 읽어주는 함수이다.
    response.end(queryData.id);
 
});
app.listen(3000);``