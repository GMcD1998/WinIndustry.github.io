import myQuestions from "./QuizQ.js";
const quizDiv = document.getElementsByClassName("quiz-container");
const questionElement = document.getElementsByClassName("question");
const answerButtonsElement = document.getElementsByClassName("btn");
let answerCount = 0;
const quizIndexes = [];
const questionList = [];
let currentQuestionIndex = [0];
import user from "../../index.js";
import { saveToLocalStorage } from "../utility/takingUserInfo.js";

const userLevels = ["Novice", "Apprentice", "Advanced", "Expert", "Master", "Elite", "Guru", "Specialist", "Veteran", "Legend"]

function initiateUserInfo() {
  const nameDiv = document.querySelector(".name-div");
  const accountLevel = document.querySelector(".account-level");
  if (localStorage.getItem("storageUser") !== null) {
    nameDiv.textContent = `Welcome to the quiz ${user.name}`;
    accountLevel.textContent = `Account Level: ${user.level}`;
  } else {
    nameDiv.textContent =
      "Please enter your username to have a record of your score and level";
  }
}
initiateUserInfo();

function checkProgressBarFill(){
  
  if (user.currentExperiencePoints >= 100) {
    for(let i = 0; i < userLevels.length; i++){
      if(user.level == userLevels[i]){
        user.level = userLevels[i+1];
        break
      }
    }
    user.currentExperiencePoints = 0;
  }
}

function updateProgress(value) {
  var progress = document.querySelector(".experience");
  progress.style.width = value + "%";
}

function startQuiz() {
  for (let i = 0; quizIndexes.length <= 9; i++) {
    const x = Math.floor(Math.random() * myQuestions.length);
    if (!quizIndexes.includes(x)) {
      quizIndexes.push(x);
    }
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


    if (chooseAnswer == correctAnswer) {
      answerButtonsElement[i].classList.add("correct");
      answerCount++;
      if (localStorage.getItem("storageUser") !== null) {
        user.currentExperiencePoints += 10;
        checkProgressBarFill();
        saveToLocalStorage(user);
        initiateUserInfo();
        updateProgress(user.currentExperiencePoints);
      }
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
  updateProgress(user.currentExperiencePoints)
}

startQuiz();
