(function() {
  const myQuestions = [
    {
      question: "Which would you most NOT want to be trapped in a room with?",
      answers: {
        a: "Triggered Mom",
        b: "Mexican Cage Fighter",
        c: "Starving Lion"
      },
      result1Answer: "a",
      result2Answer: "c",
      result3Answer: "b"

    },
    {
      question: "What does a perfect day sound like to you?",
      answers: {
        a: "Napping",
        b: "Watching TV ",
        c: "Going outside"
      },
      result1Answer: "b",
      result2Answer: "a",
      result3Answer: "c"
    },
    {
      question: "What is your major?",
      answers: {
        a: "STEM",
        b: "Non-STEM",
        c: "I'm not in College lol"
      },
      result1Answer: "c",
      result2Answer: "b",
      result3Answer: "a"
    },
    {
      question: "What is most important to you, BE HONEST -_-?",
      answers: {
        a: "Facial beauty",
        b: "Thicc thighs",
        c: "The Heart <3"
      },
      result1Answer: "a",
      result2Answer: "c",
      result3Answer: "b"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
             <img src = "data:image/jpeg;base64,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">
              ${letter}
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is matches
      if (userAnswer === currentQuestion.result1Answer) {
        // add to the number of result1 points
        result1++;
    
        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";

      } else if (userAnswer === currentQuestion.result2Answer) {
        //add to the number of result2 points
        result2++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else if (userAnswer === currentQuestion.result3Answer) {
        //add to the number of result3 points
        result3++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        //print("SOMETHING WENT WRONG!!!!");

      }

    });

    // show number of correct answers out of total
    if (result1 > result2 && result1 > result3){
      resultsContainer.innerHTML = `FEISTY GIRLS are for just for you lmaooo`;
    }
    else if (result2 > result1 && result2 > result3){
      resultsContainer.innerHTML = `SUBMISSIVE GIRLS are just for you lmaooo`;
    }
    else if (result3 > result1 && result3 > result2){
      resultsContainer.innerHTML = `GEEKY GIRLS are just for you lmaooo`;
    }else{
      print("SOMETHING IS WRONG!!!!")
    }
  
    
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  nextButton.addEventListener("click", showNextSlide);
})();