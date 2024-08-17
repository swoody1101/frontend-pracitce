<header>
  <h2>15장 정리</h2>
</header>

<body>
  <table>
    <caption><b>var, let, const로 선언한 변수 비교</b></caption>
    <thead>
      <tr>
        <th>구분</th>
        <th>var</th>
        <th>let</th>
        <th>const</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>스코프</th>
        <td>함수 레벨</td>
        <td>블록 레벨</td>
        <td>블록 레벨</td>
      </tr>
      <tr>
        <th>재할당</th>
        <td>가능</td>
        <td>가능</td>
        <td>불가능</td>
      </tr>
      <tr>
        <td>재선언</td>
        <td>가능</td>
        <td>불가능</td>
        <td>불가능</td>
      </tr>
    </tbody>
  </table>
  <br>

  <div>
    <h4>함수 선언하고 호출하기</h4>  
    <pre><code>
      function 함수명() {       // 함수 선언하기
        명령
      }
      함수명() 또는 함수명(변수) // 함수 호출하기
    </code></pre>
  </div>
  <br>
  
  <div>
    <h4>함수 표현식</h4>
    <ul>
      <li><b>익명함수:</b> 이름 없이 선언한 함수</li>
      <pre><code>
      function(매개변수) { 명령 }
      </code></pre>
      <li><b>즉시 실행 함수:</b> 함수를 정의하는 것과 동시에 실행</li>
      <pre><code>
      (function() { 명령 }());
      (fucntion() { 명령 }(인수));
      </code></pre>
      <li><b>화살표 함수:</b> ES6부터 지원하는 방법으로 화살표 기호(=>) 왼쪽에는 매개변수를, 오른쪽에는 함수를 작성함. 익명 함수일 경우에만 사용할 수 있음</li>
      <pre><code>
      (매개변수) => { 함수내용 }
      </code></pre>
    </ul>
  </div>
  <br>

  <div>
    <h4>이벤트와 이벤트 처리기</h4>
    <ul>
      <li><b>이벤트:</b> 키보드에서 키를 누르거나 브라우저가 웹 페이지를 불러오는 것처럼 웹 브라우저나 사용자가 행하는 동작</li>
      <li><b>이벤트 처리기:</b> 웹 문서에서 이벤트가 발생할 때 그 이벤트에 반응해서 실행하는 함수</li>
    </ul>
  </div>
</body>