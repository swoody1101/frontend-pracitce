<header>
  <h2>11장 정리</h2>
</header>

<body>
  <table>
    <caption><b>변형 함수</b></caption>
    <thead>
      <tr>
        <th colspan="2">translate() 함수: 요소 이동하기</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>transform: translate(tx, ty)</td>
        <td>지정한 크기만큼 x축과 y축으로 이동합니다.</td>
      </tr>
      <tr>
        <td>transform: translate(tx, ty, tz)</td>
        <td>지정한 크기만큼 x축, y축, z축으로 이동합니다.</td>
      </tr>
      <tr>
        <td>transform: translateX(tx)</td>
        <td>지정한 크기만큼 x축으로 이동합니다.</td>
      </tr>
      <tr>
        <td>transform: translateY(ty)</td>
        <td>지정한 크기만큼 y축으로 이동합니다.</td>
      </tr>
      <tr>
        <td>transform: translateZ(tz)</td>
        <td>지정한 크기만큼 z축으로 이동합니다.</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th colspan="2">scale() 함수: 요소 확대·축소하기</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>transform: scale(sx, sy)</td>
        <td>지정한 크기만큼 x축, y축으로 확대·축소합니다.</td>
      </tr>
      <tr>
        <td>transform: scale(sx, sy, sz)</td>
        <td>지정한 크기만큼 x축, y축, z축으로 확대·축소합니다.</td>
      </tr>
      <tr>
        <td>transform: scaleX(sx)</td>
        <td>지정한 크기만큼 x축으로 확대·축소합니다.</td>
      </tr>
      <tr>
        <td>transform: scaleY(sy)</td>
        <td>지정한 크기만큼 y축으로 확대·축소합니다.</td>
      </tr>
      <tr>
        <td>transform: scaleZ(sz)</td>
        <td>지정한 크기만큼 z축으로 확대·축소합니다.</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th colspan="2">rotate() 함수: 요소 회전하기</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>transform: rotate(각도)</td>
        <td>지정한 각도만큼 회전합니다.</td>
      </tr>
      <tr>
        <td>transform: rotateX(각도)</td>
        <td>x축을 기준으로 지정한 각도만큼 회전합니다.</td>
      </tr>
      <tr>
        <td>transform: rotateY(각도)</td>
        <td>y축을 기준으로 지정한 각도만큼 회전합니다.</td>
      </tr>
      <tr>
        <td>transform: rotateZ(각도)</td>
        <td>z축을 기준으로 지정한 각도만큼 회전합니다.</td>
      </tr>
      <tr>
        <td>transform: rotate3d(rx, ry, rz, 각도)</td>
        <td>x축과ㅏ y추, z축을 기준으로 지정한 각도만큼 회전합니다.</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th colspan="2">skew()함수: 요소 비틀기</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>transform: skew(ax, ay)</td>
        <td>지정한 각도만큼 x축과 y축으로 비틉니다.</td>
      </tr>
      <tr>
        <td>transform: skewX(ax)</td>
        <td>지정한 각도만큼 x축으로 비틉니다.</td>
      </tr>
      <tr>
        <td>transform: skewY(ay)</td>
        <td>지정한 각도만큼 y축으로 비틉니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>트랜지션 속성</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>transition-property</td>
        <td>트랜지션의 적용 대상을 지정니다. 기본값은 all입니다.</td>
      </tr>
      <tr>
        <td>transition-duration</td>
        <td>트랜지션의 실행 시간을 지정합니다. 단위는 s(초)이고 기본값은 0입니다.</td>
      </tr>
      <tr>
        <td>transition-timing-function</td>
        <td>트랜지션의 실행 형태를 지정합니다.</td>
      </tr>
      <tr>
        <td>transition-delay</td>
        <td>트랜지션의 지연 시간을 지정합니다. 단위는 s(초)이고 기본값은 0입니다.</td>
      </tr>
      <tr>
        <td>transition</td>
        <td>trasition-property, trasition-duration, trasition-timing-function, trasition-delay 속성을 한꺼번에 지정합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table>
    <caption><b>애니메이션션 속성</b></caption>
    <thead>
      <tr>
        <th>종류</th>
        <th>설명</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>@keyframes</td>
        <td>애니메이션이 바뀌는 지점을 설정합니다.</td>
      </tr>
      <tr>
        <td>animation-delay</td>
        <td>애니메이션의 시작 시간을 지정합니다.</td>
      </tr>
      <tr>
        <td>animation-direction</td>
        <td>애니메이션을 종료한 뒤 처음부터 시작할지, 반대 방향으로 진행할지 지정합니다.</td>
      </tr>
      <tr>
        <td>animation-duration</td>
        <td>애니메이션의 실행 시간을 지정합니다. 단위는 s(초)입니다.</td>
      </tr>
      <tr>
        <td>animation-iteration-count</td>
        <td>애니메이션의 반복 횟수를 지정합니다.</td>
      </tr>
      <tr>
        <td>animation-name</td>
        <td>@keyframes로 설정해 놓은 중간 상태를 지정합니다.</td>
      </tr>
      <tr>
        <td>animation-timing-function</td>
        <td>키프레임의 전환 형태를 지정합니다.</td>
      </tr>
      <tr>
        <td>animation</td>
        <td>animation 속성을 한꺼번에 묶어서 지정합니다.</td>
      </tr>
    </tbody>
  </table>
  <br>
</body>