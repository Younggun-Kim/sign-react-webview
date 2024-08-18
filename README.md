# 웹뷰 테스트

- 입력 받아야 하는 곳을 버튼으로 만들어 클릭시 앱으로 메시지 송신
  - Contract 컴포넌트의 `messageHandler.postMessage('')`를 통해 웹뷰로 메시지 송신
- 메시지 수신 방법
  - useEffect의 `messageHandler.poseMessageToReact()`를 통해 메세지 수신
- 서로 통신 키워드를 Enum으로 정의 하면 되려나
