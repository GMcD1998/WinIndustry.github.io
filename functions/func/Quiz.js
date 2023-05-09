import myQuestions from "./QuizQ.js";
const quizDiv = document.getElementsByClassName("quiz-container");
const questionElement = document.getElementsByClassName("question");
const answerButtonsElement = document.getElementsByClassName("btn");
let answerCount = 0;
const quizIndexes = [];
const questionList = [];
let currentQuestionIndex = [0];

for (let i = 0; quizIndexes.length <= 9; i++) {
  const x = Math.floor(Math.random() * myQuestions.length);
  if (!quizIndexes.includes(x)) {
    quizIndexes.push(x);
  }
  console.log(i);
}
for (const index of quizIndexes) {
  questionList.push(myQuestions[index]);
}

function checkAnswer(i, correctAnswer) {
  let chooseAnswer;

  if (i == 0) {
    chooseAnswer = "a";
  } else if (i == 1) {
    chooseAnswer = "b";
  } else if (i == 2) {
    chooseAnswer = "c";
  } else {
    chooseAnswer = "d";
  }

  console.log(chooseAnswer, correctAnswer);

  if (chooseAnswer == correctAnswer) {
    answerButtonsElement[i].classList.add("correct");
    answerCount++;
  } else {
    answerButtonsElement[i].classList.add("wrong");
  }
  for (let i = 0; i < answerButtonsElement.length; i++) {
    const newButton = answerButtonsElement[i].cloneNode(true);
    answerButtonsElement[i].parentNode.replaceChild(
      newButton,
      answerButtonsElement[i]
    );
  }
  currentQuestionIndex++;
  const myTimeout = setTimeout(changeQuestion, 500);
  answerButtonsElement;
}

function changeQuestion() {
  if (currentQuestionIndex <= questionList.length - 1) {
    let question = questionList[currentQuestionIndex];
    let correctAnswer = questionList[currentQuestionIndex].correctAnswer;

    questionElement[0].innerText = question.question;
    for (let i = 0; i < answerButtonsElement.length; i++) {
      answerButtonsElement[i].classList.remove("wrong", "correct");
      answerButtonsElement[i].addEventListener("click", () =>
        checkAnswer(i, correctAnswer)
      );
      switch (i) {
        case 0:
          answerButtonsElement[0].innerText = question.answers.a;
          break;
        case 1:
          answerButtonsElement[1].innerText = question.answers.b;
          break;
        case 2:
          answerButtonsElement[2].innerText = question.answers.c;
          break;
        case 3:
          answerButtonsElement[3].innerText = question.answers.d;
          break;
      }
    }
  } else {
    quizDiv[0].innerHTML = `<div class="results">Results: ${answerCount} out of 10</div>`;
  }
}
changeQuestion();
