// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "어떻게 하면 네가 가볍고도 재밌는 연말 연초를 잠깐이나마 종종 보낼 수 있을까 생각해보았는데,  나보다 더 많이 보는 노트북에서 이 페이지 하나가 그 일을 나 대신에 해줄 것 같아 만들었어! 그러니까.. 숴니의 궁금증아.. 제발 좀 멈춰줄래?ㅋㅋㅠㅠ" },
  { "number": 2, "message": "내가 매일을 함께 하며 모든 일정을 같이 소화해 내 주고 싶지만, 너무 큰 욕심이겠지?ㅋㅋㅋ 재충전이 필요할 때 작은 힘이 되었으면 해. 나한테 네 존재 자체가 해주는 것처럼!(이 처량한 페이지엔 과분한 평가겠지만😜" },
  { "number": 3, "message": "분명 9월인데, 널 만난 게. 올해를 돌아보면 너로 가득 차 있어. 고마워 2023년이 되어줘서! 나의 20대를 너로 가득 채워 보낼게! 🎁" },
  { "number": 4, "message": "너를 만나서 문장을 바꿔, 일상에서 운동을 놓지 않을 수 있었고. 남양주를 가보고, 한강을 건너며 이쁘다고만 생각하며 즐길 수 있고, 하루 마무리 끝에 네가 있어 만족하고, 너를 보며 행복하다 느끼고, 너와 함께하는 미래를 막연하게 꿈꾸며, 너무나도 확신에 차. 모든 시간을 견뎌내 주고, 곁을 내주고 표현해 주고 나를 받아주어서 고마워. 목 끝까지 가득 차게 이야기 해. 사랑해!❤️‍🔥" },
  { "number": 5, "message": "널 만난 9월부터 12월, 서로의 2023년 가을 겨울이 되어줘서 고마워 ㅎ-ㅎ.. 2024년도 잘 부탁해 ✿ ❛‿❛" },
  { "number": 6, "message": "인생은 마라톤이 아니잖아? 인생은 루트가 다르니까. 다른 사람들이 앞서 나가는 것처럼 보여도 그 사람들에겐 직선일지라도, 나에겐 오른쪽일 수 있잖아. 비교 대상 없이 오로지 자기 자신만 보면 된다고 내가 비슷하게 이야기하면 수현이는 타인과 비교하지 않는다고 하지. 자기 자신에게도 마찬가지라고 생각해. 기다려주고, 아껴주자. 딱 내가 너에게 하는 만큼이라면 나는 좋을 것 같아." },
  { "number": 7, "message": "실은 우리가 산이 되지 않아도 괜찮겠지. 숲이 되지 못해도 괜찮고, 성장하지 않아도 괜찮겠지. 그냥 내가 너의 하루에 작은 웃음이 되었으면 좋겠다ㅎ 과분해 >o<" },
  { "number": 8, "message": "너는 강하고 울면서도 견뎌낼 수 있는 사람이니 나는 그저 기다리면서 감정을 마시며 네 옆을 지켜낼 수 있었으면 해. 서로 스스로 내면을 쌓아 올리고 땅을 딛고 나무 되어 숲을 지나고, 또 다른 숲이 되고 산이 되는 과정을 함께 하자." },
  { "number": 9, "message": "빠르게 돌아가는 세상만사 속에서 작은 여유 하나에 몇 초 동안 집중하는 게 소확행..예를 들어 윤수현 셀카보기🥰" },
  { "number": 10, "message": "네가 없었으면 하지 못했을 것들이, 쉽게 포기하거나 외면했을 것들이 내 손에 가득해. 널 만나지 못했다면 내가 일상 속에서 운동을 놓지 않을 수 있었을까. 남양주라는 시를 가보았을까. 한강을 건너며 이쁘다고만 생각할 수 있었을까. 하루 마무리를 뿌듯하게 만족할 수 있었을까. 누군가를 보며 무언가를 보며 행복하다 느낄 수 있었을까. 미래를 이토록 불확실하지 않아도 쉽게 꿈꿀 수 있었을까. 작고 소심한 나는 어떠한 것에도 확신할 수 없어. 😶" },
  { "number": 11, "message": "날마다 비슷한 시간을 보내고 있지만, 너랑 그 시간을 공유하고 있다는 사실은 내 시간들을 특별하게 만들어줘. 마치 양식을 먹을 때 김치가 있다면 느낄 감정 같아 ㅎ🥬🌶️ㅎ" },
  {
    "number": 12, "message": "네가 웃을 때면 꽃이 '팡'하고 내 눈앞에서 터진 것만 같아. 늘 볼 수 있도록 내가 더 노력할게. 많이 웃자!🥰🥰"
  },
  { "number": 13, "message": "시험 보느라 세워지는 계획들 사이에서 가끔 지어지는 미소를 만들어낼 수 있는 페이지가 되길!💻" },
  { "number": 14, "message": "진짜 부유한 사람은 돈이 많은 사람이 아닌 밤에 별 밑에서 경이로움을 맛보고 다른 사람의 고통을 해석하고 덜어줄 수 있는 사람이라는 말을 담아낼 때마다 난 늘 네가 생각나.🤑" },
  { "number": 15, "message": "샌더소니아(christmas bells), 굽어 있는 게 마치 수현이 너 같다고 했었지. 귀엽고 굽어 있어도 꽃말은 비범하게도 성공이야. 길게 잡으면 부담스러워지기 쉽지만 작게 쪼개어 보면 성공은 늘 우리 근처에 있잖아. 마치 행복처럼! 오늘 하루도 제법 성공하길!💐" },
  { "number": 16, "message": "이날을 틈타서 마음을 싣고 표현할 수 있어서 다행이야! 사랑해! 몇 번을 말해도 마음을 전하기에는 모자라 🤨 " },
  { "number": 17, "message": "한 해를 보내고 다음 해를 기다리기 시작하는 날이 있다는 게 좋아" },
  { "number": 18, "message": "크리스마스가 뭐길래 다들 유난일까 싶다가도, Happy Christmas 뒤에 있는 happy new year에 눈이 가!🍁" },
  { "number": 19, "message": "하루하루 작은 행복이 있는 날들이 계속될 수 있도록 노력할게. 서로에게 서로가 있다면 무척 쉽지만, 무엇보다 소중한 시간이 될 거야. 그 사실을 잊지 않도록 할게.🕰️" },
  { "number": 20, "message": "지금 당장 작은 것들에 집중하지 않으면 다음에도 알아차리지 못할 수 있겠지. 오늘도, 네 입꼬리의 묻어있는 뒤집힌 손톱달을 사랑해 ㅎ🌜^ㅡ^🌛" },
  { "number": 21, "message": "가끔은 다음 날을 생각하기도 벅찰 만큼 행복한 날들이 있어. 그리고 그날들은 너와 함께 가득 차 있지 ㅎ" },
  { "number": 22, "message": "함께 보낼 다음날을 기다리는 것이 매일 같은 날들인데, 벌써 새해를 기대하고 있다니!" },
  { "number": 23, "message": "한 해를 정리하는 크리스마스가 아니라, 다음 해를 기다리기 시작하는 기념일이 됐으면 해. 빠르게 굴러갈 시간을 잘 준비해 보자!🌇" },
  { "number": 24, "message": "우리가 함께 보내는 첫 크리스마스를 축하해. 여느 때와 같을지라도 조금이라도 특별하길.🧑‍🎄🎄🧑‍🎄" }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `${index + 1}.jpg`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});
