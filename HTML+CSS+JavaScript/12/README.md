<header>
  <h2>12장 정리</h2>
</header>

<body>
  <table>
    <caption><b>미디어 쿼리의 속성</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>width, height</td>
        <td>웹 페이지의 가로 너비, 세로 높이</td>
      </tr>
      <tr>
        <td>min-width, min-height</td>
        <td>웹 페이지의 최소 너비, 최소 높이</td>
      </tr>
      <tr>
        <td>max-width, max-height</td>
        <td>웹 페이지의 최대 너비, 최대 높이</td>
      </tr>
      <tr>
        <td>device-width, device-height</td>
        <td>단말기의 가로 너비, 세로 높이</td>
      </tr>
      <tr>
        <td>min-device-width, min-device-height</td>
        <td>단말기의 최소 너비, 최소 높이</td>
      </tr>
      <tr>
        <td>max-device-width, max-device-height</td>
        <td>단말기의 최대 너비, 최대 높이</td>
      </tr>
      <tr>
        <td>orientation: portrait</td>
        <td>단말기의 세로 모드</td>
      </tr>
      <tr>
        <td>orientation: landscape</td>
        <td>단말기의 가로 모드</td>
      </tr>
    </tbody>
  </table>
  <br>
  
  <table>
    <caption><b>플렉스 박스 레이아웃의 속성</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
        <th>속성값</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>display</td>
        <td>플렉스 컨테이너를 지정합니다.</td>
        <td>flex, inline-flex</td>
      </tr>
      <tr>
        <td>flex-direcation</td>
        <td>플렉스 항목에서 주축과 방향을 지정합니다.</td>
        <td>row, row-reverse, column, column-reverse</td>
      </tr>
      <tr>
        <td>flex-wrap</td>
        <td>컨테이너 너비보다 항목이 많을 경우 줄 바꿈 여부를 지정합니다.</td>
        <td>nowrap, wrap, wrap-reverse</td>
      </tr>
      <tr>
        <td>flex-flow</td>
        <td>배치 방향과 줄 바꿈을 한번에 지정합니다.</td>
        <td>flex-direction 속성값과 flex-wrap 속성값 사용</td>
      </tr>
      <tr>
        <td>justify-content</td>
        <td>주축에서 플렉스 항목 정렬 방법을 지정합니다.</td>
        <td>flex-start, flex-end, center, space-between, space-around</td>
      </tr>
      <tr>
        <td>align-items</td>
        <td>교차축에서 플렉스 항목 정렬 방법을 지정합니다.</td>
        <td>flex-start, flex-end, center, baseline, stretch</td>
      </tr>
      <tr>
        <td>align-self</td>
        <td>특정 플렉스 항목의 정렬 방법을 지정합니다.</td>
        <td>flex-start, flex-end, center, baseline, stretch</td>
      </tr>
      <tr>
        <td>align-content</td>
        <td>여러 줄일 떄 교차축 정렬 방법을 지정합니다.</td>
        <td>flex-start, flex-end, center, space-between, space-around, stretch</td>
      </tr>
    </tbody>
  </table>
  <br>
  
  <table>
    <caption><b>CSS 그리드 레이아웃의 속성과 함수</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
        <th>속성값</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>display</td>
        <td>그리드 컨테이너를 지정합니다.</td>
        <td>grid, inline-grid</td>
      </tr>
      <tr>
        <td>grid-template-columns</td>
        <td>칼럼을 지정합니다.</td>
        <td>크깃값</td>
      </tr>
      <tr>
        <td>grid-template-rows</td>
        <td>줄 높이를 지정합니다.</td>
        <td>크깃값</td>
      </tr>
      <tr>
        <td>grid-column-gap</td>
        <td>칼럼과 칼럼 사이의 간격을 지정합니다.</td>
        <td>크깃값</td>
      </tr>
      <tr>
        <td>grid-row-gap</td>
        <td>줄과 줄 사이의 간격을 지정합니다.</td>
        <td>크깃값</td>
      </tr>
      <tr>
        <td>grid-gap</td>
        <td>칼럼과 줄 사이의 간격을 한꺼번에 지정합니다.</td>
        <td>크깃값</td>
      </tr>
      <tr>
        <td>grid-column-start</td>
        <td>칼럼의 시작 라인 번호를 지정합니다.</td>
        <td>숫자</td>
      </tr>
      <tr>
        <td>grid-column-end</td>
        <td>칼럼의 마지막의 라인 번호를 지정합니다.</td>
        <td>숫자</td>
      </tr>
      <tr>
        <td>grid-column</td>
        <td>칼럼 시작 번호와 끝 번호 사이에 슬래시(/)를 넣어 사용합니다.</td>
        <td>숫자/숫자</td>
      </tr>
      <tr>
        <td>grid-row-start</td>
        <td>줄 시작의 라인 번호를 지정합니다.</td>
        <td>숫자</td>
      </tr>
      <tr>
        <td>grid-row-end</td>
        <td>줄 끝의 라인 번호를 지정합니다.</td>
        <td>숫자</td>
      </tr>
      <tr>
        <td>grid-row</td>
        <td>줄 시작 번호와 줄 끝 번호 사이에 슬래시(/)를 넣어 사용합니다.</td>
        <td>숫자/숫자</td>
      </tr>
      <tr>
        <td>grid-area</td>
        <td>템플릿 이름을 지정합니다.</td>
        <td></td>
      </tr>
      <tr>
        <td>grid-template-areas</td>
        <td>grid-area를 사용해 템플릿 그리드를 만듭니다.</td>
        <td></td>
      </tr>
      <tr>
        <td>minmax()</td>
        <td>최솟값과 최댓값을 지정하는 함수입니다.</td>
        <td>크깃값, auto</td>
      </tr>
      <tr>
        <td>repeat()</td>
        <td>같은 값을 여러 번 반복할 때 사용하는 함수입니다.</td>
        <td>크깃값, auto-fill, auto-fit</td>
      </tr>
    </tbody>
  </table>
</body>