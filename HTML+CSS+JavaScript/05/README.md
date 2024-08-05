<header>
  <h2>05장 정리</h2>
</header>

<body>
  <table>
    <caption><b>폼에서 사용하는 태그</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>&ltform&gt</th>
        <td>폼의 시작과 끝을 만듭니다.</td>
      </tr>
      <tr>
        <th>&ltfieldset&gt</th>
        <td>폼 요소를 그룹으로 묶습니다.</td>
      </tr>
      <tr>
        <th>&ltlegend&gt</th>
        <td>필드셋에 제목을 붙입니다.</td>
      </tr>
      <tr>
        <th>&ltinput&gt</th>
        <td>사용자가 내용을 입력할 필드를 삽입합니다.</td>
      </tr>
      <tr>
        <th>&ltselect&gt, &ltoption&gt</th>
        <td>드롭다운 목록을 삽입합니다.</td>
      </tr>
      <tr>
        <th>&lttextarea&gt</th>
        <td>텍스트를 여러 줄 입력할 수 있는 텍스트 영역을 삽입합니다.</td>
      </tr>
      <tr>
        <th>&ltdatalist&gt</th>
        <td>데이터 목록을 삽입합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>&ltinput&gt 태그의 유형(type)</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>text</th>
        <td>한 줄짜리 텍스트를 입력할 수 있는 텍스트 상자를 넣습니다.</td>
      </tr>
      <tr>
        <th>password</th>
        <td>비밀번호를 입력할 수 있는 필드를 넣습니다.</td>
      </tr>
      <tr>
        <th>search</th>
        <td>검색할 때 입력하는 필드를 넣습니다.</td>
      </tr>
      <tr>
        <th>url</th>
        <td>URL 주소를 입력할 수 있는 필드를 넣습니다.</td>
      </tr>
      <tr>
        <th>email</th>
        <td>이메일 주소를 입력할 수 있는 필드를 넣습니다.</td>
      </tr>
      <tr>
        <th>tel</th>
        <td>전화번호를 입력할 수 있는 필드를 넣습니다.</td>
      </tr>
      <tr>
        <th>checkbox</th>
        <td>주어진 여러 항목에서 2개 이상 선택할 수 있는 체크 박스를 넣습니다.</td>
      </tr>
      <tr>
        <th>radio</th>
        <td>주어진 여러 항목에서 1개만 선택할 수 있는 라디오 버튼을 넣습니다.</td>
      </tr>
      <tr>
        <th>number</th>
        <td>숫자를 조절할 수 있는 스핀 박스를 넣습니다.</td>
      </tr>
      <tr>
        <th>range</th>
        <td>숫자를 조절할 수 있는 슬라이드 막대를 넣습니다.</td>
      </tr>
      <tr>
        <th>date</th>
        <td>사용자 지역을 기준으로 날짜(연, 월, 일)를 넣습니다.</td>
      </tr>
      <tr>
        <th>month</th>
        <td>사용자 지역을 기준으로 날짜(연, 월)를 넣습니다.</td>
      </tr>
      <tr>
        <th>week</th>
        <td>사용자 지역을 기준으로 날짜(연, 주)를 넣습니다.</td>
      </tr>
      <tr>
        <th>time</th>
        <td>사용자 지역을 기준으로 시간(시, 분, 초, 분할 초)을 넣습니다.</td>
      </tr>
      <tr>
        <th>datetime</th>
        <td>국제 표준시(UTC)로 설정된 날짜와 시간(연, 월, 일, 시, 분, 초, 분할 초)을 넣습니다.</td>
      </tr>
      <tr>
        <th>datetime-local</th>
        <td>사용자가 있는 지역을 기준으로 날짜와 시간(연, 월, 일, 시, 분, 초, 분할 초)을 넣습니다.</td>
      </tr>
      <tr>
        <th>submit</th>
        <td>전송 버튼을 넣습니다.</td>
      </tr>
      <tr>
        <th>reset</th>
        <td>리셋 버튼을 넣습니다.</td>
      </tr>
      <tr>
        <th>image</th>
        <td>submit 버튼 대신 사용할 이미지를 넣습니다.</td>
      </tr>
      <tr>
        <th>button</th>
        <td>일반 버튼을 넣습니다.</td>
      </tr>
      <tr>
        <th>file</th>
        <td>파일을 첨부할 수 있는 버튼을 넣습니다.</td>
      </tr>
      <tr>
        <th>hidden</th>
        <td>사용자에게는 보이지 않지만 서버로 넘겨주는 값이 있는 필드를 만듭니다.</td>
      </tr>
    </tbody>
  </table>
  <br>
  
  <table>
    <caption><b>&ltinput&gt 태그의 속성</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>autofocus</th>
        <td>웹 문서가 열리면 입력 필드 안에 마우스 포인터를 표시합니다.</td>
      </tr>
      <tr>
        <th>placeholder</th>
        <td>텍스트 필드에 힌트를 표시합니다.</td>
      </tr>
      <tr>
        <th>readonly</th>
        <td>입력 필드를 읽기 전용으로 지정합니다.</td>
      </tr>
      <tr>
        <th>required</th>
        <td>필수 입력 필드를 지정합니다.</td>
      </tr>
      <tr>
        <th>max</th>
        <td>숫자 입력 필드에서 최댓값을 지정합니다.</td>
      </tr>
      <tr>
        <th>min</th>
        <td>숫자 입력 필드에서 최솟값을 지정합니다.</td>
      </tr>
      <tr>
        <th>step</th>
        <td>숫자 입력 필드에서 증감할 간격을 지정합니다.</td>
      </tr>
      <tr>
        <th>maxlength</th>
        <td>텍스트 관련 필드에서 입력할 수 있는 최대 길이를 지정합니다.</td>
      </tr>
      <tr>
        <th>minlength</th>
        <td>텍스트 관련 필드에서 입력할 수 있는 최소 길이를 지정합니다.</td>
      </tr>
      <tr>
        <th>size</th>
        <td>텍스트 관련 필드에서 화면에 표시할 크기를 지정합니다.</td>
      </tr>
      <tr>
        <th>list</th>
        <td>연결할 데이터 목록을 지정합니다.</td>
      </tr>
    </tbody>
  </table>
</body>