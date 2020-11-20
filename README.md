# BGM Node Study Calculator

Simple Calculator for BGM Node Study  
부산 개발자 모임 노드 스터디를 위한 간단한 계산기 예제


### Summary

Only uses Node default modules to make a simple calculator, supporting addition, subtraction, division, and multiplication.
To run this code, run `app.mjs` file with Node: `node app.mjs`.
  
Node의 기본 모듈만을 사용하여 만든 사칙연산(덧셈, 뺄셈, 나눗셈, 곱셈)을 수행할 수 있는 계산기.
`app.mjs` 파일을 Node에서 실행시켜 코드를 실행시킬 수 있다.
`node app.mjs` 명령어를 입력하면 된다.


### Front-End

Front-end (Webpage) only get user input and display the calculation result.
Though the calculation could also be done in client-side, for the educational purpose, the calculation is done on the server.
User can manually type the calculation string in or press(touch) buttons to generate it.
When Enter or "=" button pressed, the website will send request to the Node server to get the calculation result.

프론트앤드 웹페이지는 사용자의 입력을 받아들이고 계산결과를 표시해 주는 기능만 수행한다.
비록 연산을 클라이언트단에서 처리할 수 있으나, 교육목적상 연산은 서버에서 진행하는것으로 하였다.
사용자는 카보드를 통해 계산식을 입력할 수도 있고, 웹페이지의 버튼을 통해서 계산식을 만들어낼 수도 있다.
엔터 키 혹은 "=" 버튼이 눌려지면, 클라이언트는 Node 서버로 계산결과를 받기 위한 리퀘스트를 보낸다.

Used CSS Grid to design the page.
Meaning the Internet Explorer may have difficulty drawing the demo page.
Please use the other browsers.

CSS Grid를 활용하여 웹페이지 (클라이언트) 구현.
이에 따라, 인터넷 익스플로러에서는 제대로 화면이 보이지 않을 수 있으므로, 다른 브라우저의 사용을 권장함.

Had two option to serve demo page: 1) let user to download and open the HTML file, and 2) send contents of the HTML files from the Node webserver.
Chosen the second option for user convenient; user can access the demo page only using url address: `http://localhost:4000` by default.

데모 웹페이지를 제공하기 위한 두가지 옵션이 있다.
하나는 유저가 수동으로 HTML파일을 다운로드받고 이것을 여는 방법이고, 다른 하나는 Node 웹서버를 통해 HTML파일의 내용을 보내주는 것이다.
사용자의 편의를 위해, 두번째 방법을 선택하였으며, 이는 유저가 `http://localhost:4000`의 주소(기본값)를 통해 데모 페이지로 바로 접근할 수 있도록 해준다.
 

### Back-End

Used Node v14.15.1, the latest LTS version (as of now: Nov. 20. 2020).
Though we have better alternative in building webservers, as this project is very simple, I decide to use only Node's default modules.
In total, this project depends on three packages: `http`, `fs`, and `url`.
`http` was used to handle http requests and open up webserver.
`fs` was used to read files from file system.
`url` was used to isolate path from the HTTP request URL and to route the requests properly.

현재 (2020년 11월 20일 기준) Node의 최신 버전인 v14.15.1 환경에서 개발되었다.
비록 웹서버의 구성을 더 쉽게 해주는 다른 대안들도 존재하지만, 매우 간단한 프로젝트임을 감안하여 Node의 기본 모듈만을 사용하여 제작하였다.
총 이 프로젝트는 3가지의 패키지(`http`, `fs`, 그리고 `url`)에 의존성을 가진다.
`http`는 웹서버를 열고 HTTP 리퀘스트를 처리하기 위해 사용되었으며, `fs`는 파일 시스템으로부터 파일을 읽어오기 위해 사용하였다.
`url`은 HTTP 리퀘스트 URL로부터 경로를 추출하기 위해 사용되었으며, 추출된 경로를 바탕으로 요청을 적절하게 처리하기 위해 사용하였다.

The requests can be categorized in three categories based on their paths: empty path (root), `result`, and others.
For the empty path, the server will response with `web/calc.html` file, which containing building blocks of client webpage.
For the other path except for `result`, the server will try to search file inside `web` directory; if file not exist, response with 404 error, otherwise, response with the contents of the file.
This route will handle client side JavaScript and css stylesheet file. 
If the path equals to `result`, it will return the calculation result based on the calculation string that user provided as the form of the query string.
Once query string parsed and checked the validity, a new `Function` object created which run the calculation and return the result back.
Rather than using `eval()`, this would be safer approach.

요청은 경로에 따라 빈 경로(루트), `result`, 그리고 기타의 세가지 그룹으로 나뉠 수 있다.
빈 경로의 경우, 서버는 클라이언트 사이트를 구성하는 요소를 포함하는 `web/calc.html`의 내용으로 응답한다.
`result`를 제외한 다른 경로의 경우, 서버는 `web` 디렉터리 내부에서 경로가 지칭하는 파일을 찾고, 만약 파일이 존재하지 않는다면 404 에러를, 존재한다면 파일의 내용을 반환한다.
이 라우터는 클라이언트 사이드의 자바스크립트와 CSS 스타일시트를 처리하기 위해 구성되었다.
만약 경로가 `result`인 경우, 서버는 유저가 Query String으로 제공한 수식을 계산하여 이 결과를 반환한다.
Query String의 유효성을 검사한 후, 수식을 계산하기 위해 `Function` 객체를 만든다.
이 방법은 `eval()` 함수를 사용하는 방법보다 더 안전한 방법이다.
