var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url,true).query;
    var title_id = queryData.id;
    var title;
    console.log(queryData.id); 
    if(title_id === 'free'){
      title = '자유게시판';
    }else if(title_id === 'secret'){
        title = '비밀게시판'
    }else if(title_id === 'info'){
        title = '비밀게시판'
    }else if(title_id === 'ad'){
        title = '홍보게시판'
    }else{
        title = 'SW게시판'
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
      var template = `
      <!DOCTYPE html>
      <html>
          <head>
              <meta charset="utf-8">
              <title>AJOUMemo</title>
              <link rel="stylesheet" href="./style.css">
          </head>
          <body>
              <div class="container">
                  <div class="container header">
                      <button type="button" name="menu-button" class="menu-btn">
                          <span></span>
                          <span></span>
                          <span></span>
                      </button>
                      <div class="logo">AJOUMemo</div>
                      <button type="button" name="login-button" class="login-btn">Login</button>
                      <section>
                          <ul class="menu-lists">
                              <li class="menu"><a href="/?id=free">자유 게시판</a></li>
                              <li class="menu"><a href="/?id=secret">비밀 게시판</a></li>
                              <li class="menu"><a href="/?id=info">정보 게시판</a></li>
                              <li class="menu"><a href="/?id=ad">홍보 게시판</a></li>
                              <li class="menu"><a href="/?id=sw">SW 게시판</a></li>
                          </ul>
                      </section>
                  </div>
                  <div class="container main">
                      <div class="contents">
                          <div class="title">${title}</div>
                          <button type="button" name="Enrollment" class="enroll-btn">등록하기</button>
                      </div>
                      <div class="board-wrap">
                          <div class="board-body">
                              <div class="items">
                                  <div class="item date">12/18</div>
                                  <div class="item text"><a href="#">아주 비기너 참여하시는..</a></div>
                                  <div class="item private">익명</div>
                              </div>
                              <div class="items">
                                  <div class="item date">12/18</div>
                                  <div class="item text"><a href="#">아주 비기너 참여하시는..</a></div>
                                  <div class="item private">익명</div>
                              </div>
                              <div class="items">
                                  <div class="item date">12/18</div>
                                  <div class="item text"><a href="#">아주 비기너 참여하시는..</a></div>
                                  <div class="item private">익명</div>
                              </div>
                              <div class="items">
                                  <div class="item date">12/18</div>
                                  <div class="item text"><a href="#">아주 비기너 참여하시는..</a></div>
                                  <div class="item private">익명</div>
                              </div>
                              <div class="items">
                                  <div class="item date">12/18</div>
                                  <div class="item text"><a href="#">아주 비기너 참여하시는..</a></div>
                                  <div class="item private">익명</div>
                              </div>
                              <div class="items">
                                  <div class="item date">12/18</div>
                                  <div class="item text"><a href="#">아주 비기너 참여하시는..</a></div>
                                  <div class="item private">익명</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="container footer">
                      <div class="number-list">
                          <li class="footer-list prev"><a href="#">[이전]</a></li>
                          <li class="footer-list number"><a href="#">1</a></li>
                          <li class="footer-list number"><a href="#">2</a></li>
                          <li class="footer-list number"><a href="#">3</a></li>
                          <li class="footer-list number"><a href="#">4</a></li>
                          <li class="footer-list number"><a href="#">5</a></li>
                          <li class="footer-list next"><a href="#">[다음]</a></li>
                      </div>
                  </div>
              </div>
          </body>
          <script src="./main.js"></script>
      </html>
    `;
    response.end(template);
    });
});
app.listen(3000);