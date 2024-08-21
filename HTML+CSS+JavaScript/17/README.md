<header>
  <h2>17장 정리</h2>
</header>

<body>
  <div>
    <h4>DOM 트리의 노드</h4>
    <ul>
      <li><b>요소 노드: </b>모든 HTML 태그를 의미합니다.</li>
      <li><b>텍스트 노드: </b>태그의 텍스트 내용입니다.</li>
      <li><b>속성 노드: </b>태그의 속성입니다.</li>
      <li><b>주석 노드: </b>주석입니다.</li>
    </ul>
  </div>
  <br>

  <div>
    <h4>DOM에 접근하기</h4>
    <ul>
      <li><b>getElementById(id): </b>id명으로 접근합니다.</li>
      <li><b>getElementsByClassName(class): </b>클래스명으로 접근하며 여러 요소가 배열 형태로 저장됩니다.</li>
      <li><b>getElementsByTagName(tag): </b>태그명으로 접근하며 여러 요소가 배열 형태로 저장됩니다.</li>
      <li><b>querySelector(): </b>id명이나 선택자를 사용해 접근합니다.</li>
      <li><b>querySelectorAll(): </b>클래스명이나 태그명의 선택자를 사용해 접근합니다. 여러 노드가 노드 리스트 형태로 저장됩니다.</li>
      <li>속성 가져오기 및 수정하기</li>
      <pre><code>
        getAttribute(속성)      // 태그에서 사용한 속성값을 가져옴
        setAttribute(속성, 값)  // 태그의 속성을 특정한 값으로 지정함
      </code></pre>
      <li>이벤트 처리하기</li>
      <pre><code>
        요소.addEventListener(이벤트, 함수, 캡처 여부)
      </code></pre>
      <li>CSS 속성에 접근하기</li>
      <pre><code>
        document.요소명.style.속성명
      </code></pre>
    </ul>
  </div>
  <br>

  <table>
    <caption><b>텍스트 노드를 사용하는 새로운 요소 추가하기</b></caption>
    <thead>
      <tr>
        <th>순서</th>
        <th>메서드</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>createElement()</td>
        <td>새로운 요소 노드를 만듭니다.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>createTextNod()</td>
        <td>새로운 텍스트 노드를 만듭니다.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>appendChild()</td>
        <td>텍스트 노드를 요소 노드의 자식으로 연결합니다.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>appendChild()</td>
        <td>요소 노드를 DOM에 연결합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>속성값이 있는 새로운 요소 추가하기</b></caption>
    <thead>
      <tr>
        <th>순서</th>
        <th>메서드</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>creteElement()</td>
        <td>새로운 요소 노드를 추가합니다.</td>
      </tr>
      <tr>
        <td>2</td>
        <td>createAttribute()</td>
        <td>새로운 속성 노드를 추가합니다.</td>
      </tr>
      <tr>
        <td>3</td>
        <td>속성값 지정하기</td>
        <td>속성값을 프로퍼티로 지정합니다.</td>
      </tr>
      <tr>
        <td>4</td>
        <td>setAttributeNode()</td>
        <td>속성 노드를 요소 노드의 자식으로 연결합니다.</td>
      </tr>
      <tr>
        <td>5</td>
        <td>appendChild()</td>
        <td>요소 노드를 DOM에 연결합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <div>
    <h4>노드 삭제</h4>
    <p>parentNode 프로퍼티로 부모 노드를 찾아서 부모 노드에서 삭제합니다.</p>
    <pre><code>
      부모노드.removeChild(자식노드)
    </code></pre>
  </div>

</body>