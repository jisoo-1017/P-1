## 1/7 공부한 내용
### Node.js

### url의 이해

http://opentutorials.org:3000/main?id=HTML&page=12
http - protocol을 의미한다. 사용자가 서버에 접속할 때 어떤 방식으로 접속할 것인가를 나타낸다.
opentutorials.org - 인터넷에 접속되어 있는 각각의 호스트를 의미한다.
3000 - port 번호이다. 한대의 컴퓨터 안에는 여러 컴퓨터가 있는데 클라이언트는 어떤 서버와 통신할지 결정해야한다. 이때 쓰이는 것이 port번호이다.
main - path이다. 어떤 디렉토리의 어떤 파일인지를 가르킨다.
id=HTML&page=12 - query string이다. query string의 값을 변경하면 클라이언트가 웹서버에게 데이터를 전달할 수 있다. 예를 들어 내가 읽고 싶은 것은 HTML의 파일이고 page는 12p이다. 라는 정보를 보낼 수 있다. 시작은 ?로 시작한다. 