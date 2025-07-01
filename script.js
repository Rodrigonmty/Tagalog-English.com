const questions = [
  { question: '1. Ano ang English ng "Bahay"?', answer: 'house' },
  { question: '2. Ano ang English ng "Pagmamahal"?', answer: 'love' },
  { question: '3. Ano ang English ng "Paano kung"?', answer: 'what if' }
];

let currentQuestion = 0;

function checkAnswer() {
  const input = document.getElementById("answer");
  const userAnswer = input.value.trim().toLowerCase();
  const message = document.getElementById("message");
  const questionText = document.getElementById("question-text");
  const videoContainer = document.getElementById("videoContainer");
  const quizContainer = document.getElementById("quiz-container");

  if (userAnswer === questions[currentQuestion].answer) {
    message.style.color = "green";
    message.textContent = "Mahal kaba?!";
    currentQuestion++;
    input.value = "";

    if (currentQuestion < questions.length) {
      questionText.textContent = questions[currentQuestion].question;
    } else {
      // Show video and messages
      quizContainer.style.display = "none";
      videoContainer.style.display = "flex";

      const video = document.getElementById("rewardVideo");
      video.play();

      showRelapseWords();
    }
  } else {
    message.style.color = "red";
    message.textContent = "Mali ba na nakilala mo sya?";
  }
}

function showRelapseWords() {
  const relapseWords = [
  "paano kung may kausap na siyang iba ngayon?",
  "what if masaya na siya habang ako nasasaktan?",
  "paano kung habang umiiyak ako, may kayakap na siyang iba?",
  "what if hindi na pala ako 'yung hinahanap niya?",
  "paano kung matagal na pala niya akong kinalimutan?",
  "what if may ibang nagpapangiti sa kanya ngayon?",
  "paano kung ako nalang ang nag-iisa sa laban na 'to?",
  "what if yung 'good night' niya, hindi lang para sa'kin?",
  "paano kung habang iniisip ko siya, hindi niya na ako naaalala?",
  "what if habang nagtatapat ako ng sakit, natatawa na siya kasama ang iba?",
  "paano kung ako lang pala ang naghihintay pa rin?",
  "what if ‘yung mga sinabi niya, sinabi rin niya sa iba?"
  ];

  const container = document.getElementById("relapseBox");

  relapseWords.forEach((word, index) => {
    setTimeout(() => {
      const line = document.createElement("p");
      line.textContent = word;
      container.appendChild(line);
    }, index * 1000);
  });
}
