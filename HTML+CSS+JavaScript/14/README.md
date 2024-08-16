<header>
  <h2>12장 정리</h2>
</header>

<body>
  <div>
    <h4>변수</h4>
    <ul>
      <li><b>변수(variable)란?</b> 프로그램을 실행하는 동안 값이 여러 번 달라질 수 있는 데이터를 말합니다.</li>
      <li><b>변수 작성 규칙</b>
        <ol>
          <li>변수의 이름은 대소 문자를 구별하여 작성합니다.</li>
          <li>영문자와 숫자, 언더스코어(_)만 사용하며 숫자로 시작할 수 없습니다.</li>
        </ol>
      </li>
    </ol>
  </div>
  <br>

  <table>
    <caption><b>자료형</b></caption>
    <thead>
      <tr>
        <th colspan="2">종류</th>
        <th>속성값</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3">기본<br>유형</td>
        <td>숫자형</td>
        <td>따옴표 없이 숫자로만 표시됩닏.</td>
      </tr>
      <tr>
        <td>문자열</td>
        <td>작은따옴표('')나 큰따옴표("")로 묶어서 나타냅니다.</td>
      </tr>
      <tr>
        <td>논리형</td>
        <td>참(true)나 거짓(false)이란 2가지 값만 가집니다.</td>
      </tr>
      <tr>
        <td rowspan="2">복합<br>유형</td>
        <td>배열</td>
        <td>하나의 변수에 여러 개의 값을 지정합니다.</td>
      </tr>
      <tr>
        <td>객체</td>
        <td>함수와 속성들이 함께 포함된 자료형입니다.</td>
      </tr>
      <tr>
        <td rowspan="2">특수<br>유형</td>
        <td>undefined</td>
        <td>데이터 유형이 지정되지 않았을 때의 상태를 나타냅니다.</td>
      </tr>
      <tr>
        <td>null</td>
        <td>데이터 값이 유효하지 않은 상태를 나타냅니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>연산자</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>산술 연산자</td>
        <td>+, -, *, /, %, ++, --</td>
      </tr>
      <tr>
        <td>할당 연산자</td>
        <td>=, +=, -=, *=, /=, %=</td>
      </tr>
      <tr>
        <td>비교 연산자</td>
        <td>==, !=, ===, !==, <, <=, >, >=</td>
      </tr>
      <tr>
        <td>논리 연산자</td>
        <td>!, &&, ||</td>
      </tr>
      <tr>
        <td>조건 연산자</td>
        <td>(조건) ? (true일 때 실행할 명령) : (false일 때 실행할 명령)</td>
      </tr>
    </tbody>
  </table>
  <br>
  
  <div>
    <h4>조건문</h4>
    <ul>
      <li>if문</li>
      <pre><code>
      if(조건) {
        조건이 true일 때 실행할 명령
      }
      </code></pre>
      <li>if~else문</li>
      <pre><code>
      if(조건) {
        조건이 true일 떄 실행할 명령
      } else {
        조건이 false일 때 실행할 명령
      }
      </code></pre>
      <li>switch문</li>
      <pre><code>
      switch(조건) {
        case 값1: 문장1
          break;
        case 값2: 문장2
          break;
          ...
        default: 문장n
      }
      </code></pre>
    </ul>
  </div>
  <br>
  
  <div>
    <h4>반복문</h4>
    <ul>
      <li>for문</li>
      <pre><code>
      for(초깃값; 조건; 증가식) {
        실행할 명령
      }
      </code></pre>
      <li>while문</li>
      <pre><code>
      while(조건) {
        실행할 명령
      }
      </code></pre>
      <li>do~while문</li>
      <pre><code>
      do {
        실행할 명령
      } while(조건)
      </code></pre>
      <li>break문</li>
      <pre><code>
      break; // 반복문이 끝나기 전에 조건에 따라 반복문을 빠져나옴
      </code></pre>
      <li>continue문</li>
      <pre><code>
      continue; // 반복 과정을 한 차례 건너뛰고 반복문의 맨 앞으로 돌아감
      </code></pre>
    </ul>
  </div>
</body>