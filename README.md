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
