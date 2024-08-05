<header>
  <h2>06장 정리</h2>
</header>

<body>
  <table>
    <caption><b>스타일 시트</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>브라우저 기본 스타일</td>
        <td>웹 브라우저에 웹 문서를 표시할 때 브라우저에서 기본으로 사용하는 스타일입니다.</td>
      </tr>
      <tr>
        <td>인라인 스타일</td>
        <td>style 속성을 사용해 필요한 요소에 스타일을 직접 지정합니다.</td>
      </tr>
      <tr>
        <td>내부 스타일 시트</td>
        <td>문서 앞부분에 문서에서 사용하는 스타일을 모아서 함께 정의하고 관리합니다.</td>
      </tr>
      <tr>
        <td>외부 스타일 시트</td>
        <td>뮨서에서 사용하는 스타일을 모아서 따로 파일로 지정한 후 연결해서 사용합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>CSS 기본 선택자</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
        <th>작성 예시</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>전체 선택자</td>
        <td>문서의 모든 요소에 스타일을 적용합니다.</td>
        <td>* { margin: 0; }</td>
      </tr>
      <tr>
        <td>타입 선택자</td>
        <td>특정 태그를 사용한 모든 요소에서 스타일을 적용합니다.</td>
        <td>p { font-style: italic; }</td>
      </tr>
      <tr>
        <td>클래스 선택자</td>
        <td>특정 부분만 선택해서 문서 안에 여러 번 적용합니다. <br>마침표(.)를 붙여서 사용합니다.</td>
        <td>.bg { background-color: #ddd; }</td>
      </tr>
      <tr>
        <td>id 선택자</td>
        <td>특정 부분만 선택해서 문서 안에서 한 번만 적용합니다. <br> #을 붙여서 사용합니다.</td>
        <td>#container { width: 500px; }</td>
      </tr>
      <tr>
        <td>그룹 선택자</td>
        <td>여러 요소에 같은 스타일을 적용할 때 사용합니다.</td>
        <td>h1, h2 { text-align: center; }</td>
      </tr>
    </tbody>
  </table>
  <br>
  
  <div>
    <h4>스타일 우선순위</h4>
    <ol>
      <li><b>얼마나 중요한가?</b></li>
      <p>1. 사용자 스타일 → 2. 제작자 스타일 → 3. 브라우저 기본 스타일</p>
      <li><b>적용 범위는 어디까지인가?</b></li>
      <p>1. !important → 2. 인라인 스타일 → 3. id 스타일 → 4. 클래스 스타일 → 5. 타입 스타일</p>
      <li><b>소스 작성 순서는 어떠한가?</b></li>
      <p>나중에 작성한 스타일이 먼저 작성한 스타일을 덮어씁니다.</p>
    </ol>
  </div>
</body>