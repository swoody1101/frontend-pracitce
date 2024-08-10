<header>
  <h2>10장 정리</h2>
</header>

<body>
  <table>
    <caption><b>연결 산텍자</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>형식</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>하위 선택자</td>
        <td>상위요소 하위요소</td>
        <td>상위 요소에 포함된 모든 하위 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>자식 선택자</td>
        <td>부모요소 > 자식요소</td>
        <td>부모 요소에 포함된 자식 요소만 선택합니다.</td>
      </tr>
      <tr>
        <td>인접 형제 선택자</td>
        <td>요소1 + 요소2</td>
        <td>요소1 이후 맨 먼저 오는 형제 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>형제 선택자</td>
        <td>요소1 ~ 요소2</td>
        <td>요소1과 형제인 모든 요소를 선택합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>속성 선택자</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>선택 요소</th>
        <th>예시</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>[속성]</td>
        <td>해당 속성이 있는 요소</td>
        <td>[required]</td>
      </tr>
      <tr>
        <td>[속성 = 값]</td>
        <td>지정한 속성값이 있는 요소</td>
        <td>[target = _blank]</td>
      </tr>
      <tr>
        <td>[속성 ~= 값]</td>
        <td>지정된 속성값이 포함된 요소(단어별)</td>
        <td>[class ~= button]</td>
      </tr>
      <tr>
        <td>[속성 |= 값]</td>
        <td>지정한 속성값이 포함된 요소(하이픈 포함, 단어별)</td>
        <td>[title |= us]</td>
      </tr>
      <tr>
        <td>[속성 ^= 값]</td>
        <td>지정한 속성값으로 시작하는 요소</td>
        <td>[title ^= eng]</td>
      </tr>
      <tr>
        <td>[속성 $= 값]</td>
        <td>지정한 속성값으로 끝나는 요소</td>
        <td>[href $= xls]</td>
      </tr>
      <tr>
        <td>[속성 *= 값]</td>
        <td>지정한 속성값의 일부가 일치하는 요소</td>
        <td>[href *= w3]</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>가상 클래스</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>:link</td>
        <td>방문하지 않은 링크에 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:visited</td>
        <td>방문했던 링크에 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:hover</td>
        <td>지정한 요소에 마우스 포인터를 올려놓을 떄 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:active</td>
        <td>지정한 요소를 활성화했을 때 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:focus</td>
        <td>지정한 요소에 초점이 맞춰졌을 때 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:target</td>
        <td>앵커 대상에 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:enabled</td>
        <td>지정한 요소를 사용할 수 있는 상태일 때 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:disabled</td>
        <td>지정한 요소를 사용할 수 없는 상태일 때 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:checked</td>
        <td>선택한 요소의 스타일을 적용합니다.</td>
      </tr>
      <tr>
        <td>:not</td>
        <td>지정한 요소가 아닐 때 선택해서 스타일을 적용합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>구조 가상 클래스</b></caption>
    <thead>
      <tr>
        <th>선택자</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>:only-child</td>
        <td>부모 안에 자식 요소가 하나뿐일 때 자식 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>A:only-type-of</td>
        <td>부모 안에 A요소가 하나뿐일 때 선택합니다.</td>
      </tr>
      <tr>
        <td>:first-child</td>
        <td>부모 안에 있는 모든 요소 중에서 첫 번째 자식 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>:last-child</td>
        <td>부모 안에 있는 모든 요소 중에서 마지막 자식 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>A:first-of-type</td>
        <td>부모 안에 있는 A 요소 중에서 첫번째 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>A:last-of-type</td>
        <td>부모 안에 있는 A 요소 중에서 마지막 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>:nth-child(n)</td>
        <td>부모 안에 있는 모든 요소 중에서 n번째 자식 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>:nth-last-child(n)</td>
        <td>부모 안에 있는 모든 요소 중에서 끝에서 n번째 자식 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>A:nth-of-type(n)</td>
        <td>부모 안에 있는 A 요소 중에서 n번째 요소를 선택합니다.</td>
      </tr>
      <tr>
        <td>A:nth-last-of-type(n)</td>
        <td>부모 안에 있는 A 요소 중에서 끝에서 n번째 요소를 선택합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>가상 요소</b></caption>
    <thead>
      <tr>
        <th>선택자</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>::first-love</td>
        <td>첫 번째 줄을 선택합니다.</td>
      </tr>
      <tr>
        <td>::first-letter</td>
        <td>줄에서 첫 번째 글자를 선택합니다.</td>
      </tr>
      <tr>
        <td>::before</td>
        <td>특정 요소의 앞에 내용이나 스타일을 추가합니다.</td>
      </tr>
      <tr>
        <td>::after</td>
        <td>특정 요소의 뒤에 내용이나 스타일을 추가합니다.</td>
      </tr>
    </tbody>
  </table>
</body>