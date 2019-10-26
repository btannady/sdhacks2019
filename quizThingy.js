(function() {
  const myQuestions = [
    {
      question: "What kind of animal are you?",
      answers: {
        a: "Triggered Mom",
        b: "Mexican Cage Fighter",
        c: "Starving Lion"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c"

    },
    {
      question: "Who is the dankest Meme Master?",
      answers: {
        a: "Keanu Reeves",
        b: "Shia LaBeouf",
        c: "Trick question; they're both the best"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c"
    },
    {
      question: "What does the fox say?",
      answers: {
        a: "CAH CAH CAH CAH CAH CAH CAH CAH CAH",
        b: "meow",
        c: "ribbit"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c"
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
              ${letter} :
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
    let result4 = 0;

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
      resultsContainer.innerHTML = `You are a RESULT1 lmaooo`;
    }
    else if (result2 > result1 && result2 > result3){
      resultsContainer.innerHTML = `You are a RESULT2 lmaooo`;
    }
    else if (result3 > result1 && result3 > result2){
      resultsContainer.innerHTML = `You are a RESULT3 lmaooo`;
    }else{
      print("SOMETHING IS WRONG!!!!")
    }
  
    
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
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

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();