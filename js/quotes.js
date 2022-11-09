const quotes = [
  {
    quote : "꿈이 있다면, 그 꿈을 잡고 절대 놓아주지마라." ,
    author : "캐럴 버넷"
  },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author: "마하트마 간디"
  },
  {
    quote: "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
    author: "앨런 케이"
  },
  {
    quote: "그 무엇으로도 대체할 수 없는 존재가 되기 위해서는 늘 남달라야 한다.",
    author: "코코 샤넬"
  },
  {
    quote: "세상은 고통으로 가득하지만, 한편 그것을 이겨내는 일로도 가득차 있다.",
    author: "헬렌 켈러"
  },
  {
    quote: "기운과 끈기는 모든 것을 이겨낸다",
    author: "벤자민 프랭클린"
  },
  {
    quote: "우리의 모든 꿈은 이루어질 것이다. 그것을 믿고 나갈 용기만 있다면",
    author: "월트 디즈니"
  },
  {
    quote: "불가능이 무엇인가는 말하기 어렵다. 어제의 꿈은 오늘의 희망이며 내일의 현실이기 때문이다.",
    author: "로버트 고다드"
  },
  {
    quote: "해야할 일은 과김히 하라. 결심한 일은 반드시 실행하라.",
    author: "벤자민 프랭클린"
  },
  {
    quote: "절대로, 절대로, 절대로, 절대로 포기하지 마라",
    author: "윈스턴 처칠"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNum = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNum];
quote.innerText = `${todaysQuote.quote} – `;
author.innerText = todaysQuote.author;

const quoteContainer = document.querySelector("#quote");
