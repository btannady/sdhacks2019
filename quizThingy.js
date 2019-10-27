(function() {
  const myQuestions = [
    {
      question: "Which would you most NOT want to be trapped in a room with?",
      answers: {
        a: "Triggered Mom",
        b: "Mexican Cage Fighter",
        c: "Starving Lion",
        d: "doof",
        e: "a",
        f: "q",
        g: "f"
      },
      result1Answer: "a", //Logan Paul
      result2Answer: "b", //Cody Ko
      result3Answer: "c", //idubbbz
      result4Answer: "d", //h3h3
      result5Answer: "e", //pewdiepie
      result6Answer: "f", //michael reeves
      result7Answer: "g" //techLead


    },
    {
      question: "What does a perfect day sound like to you?",
      answers: {
        a: "Napping",
        b: "Watching TV ",
        c: "Going outside",
        d: "soof",
        e: "q",
        f: "g",
        g: "h"

      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
    },
    {
      question: "What is your major?",
      answers: {
        a: "STEM",
        b: "Non-STEM",
        c: "I'm not in College lol",
        d: "doof",
        e: "a",
        f: "q"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
    },
    {
      question: "What is most important to you, BE HONEST -_-?",
      answers: {
        a: "Facial beauty",
        b: "Thicc thighs",
        c: "The Heart <3",
        d: "kroof",
        e: "y",
        f: "b",
        g: "r"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
      
    },
    {
      question: "What is most important to you, BE HONEST -_-?",
      answers: {
        a: "Facial beauty",
        b: "Thicc thighs",
        c: "The Heart <3",
        d: "kroof",
        e: "y",
        f: "b",
        g: "r"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
      
    },
    {
      question: "What is most important to you, BE HONEST -_-?",
      answers: {
        a: "Facial beauty",
        b: "Thicc thighs",
        c: "The Heart <3",
        d: "kroof",
        e: "y",
        f: "b",
        g: "r"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
      
    },

    {
      question: "What is most important to you, BE HONEST -_-?",
      answers: {
        a: "Facial beauty",
        b: "Thicc thighs",
        c: "The Heart <3",
        d: "kroof",
        e: "y",
        f: "b",
        g: "r"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
      
    },

    {
      question: "What is most important to you, BE HONEST -_-?",
      answers: {
        a: "Facial beauty",
        b: "Thicc thighs",
        c: "The Heart <3",
        d: "kroof",
        e: "y",
        f: "b",
        g: "r"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
      
    },

    {
      question: "What is most important to you, BE HONEST -_-?",
      answers: {
        a: "Facial beauty",
        b: "Thicc thighs",
        c: "The Heart <3",
        d: "kroof",
        e: "y",
        f: "b",
        g: "r"
      },
      result1Answer: "a",
      result2Answer: "b",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "e",
      result6Answer: "f",
      result7Answer: "g"
      
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
    let result5 = 0;
    let result6 = 0;
    let result7 = 0;


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
        console.log(result1);

        // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    
      } else if (userAnswer === currentQuestion.result2Answer) {
        //add to the number of result2 points
        result2++;
        console.log(result2);

        // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
      } else if (userAnswer === currentQuestion.result3Answer) {
        //add to the number of result3 points
        result3++;
        console.log(result3);
      } else if (userAnswer === currentQuestion.result4Answer) {
        //add to the number of result3 points
        result4++;
        console.log(result4);
      } else if (userAnswer === currentQuestion.result5Answer) {
        //add to the number of result3 points
        result5++;
        console.log(result5);
      } else if (userAnswer === currentQuestion.result6Answer) {
        //add to the number of result3 points
        result6++;
        console.log(result6);
      } else if (userAnswer === currentQuestion.result7Answer) {
        //add to the number of result3 points
        result7++;
        console.log(result7);

        // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        console.log("SOMETHING WENT BONG!!!!");

      }

    });

    // show number of correct answers out of total
    if (result1 > result2 && result1 > result3 && result1 > result4 && result1 > result5 && result1 > result6 && result1 > result7){
      resultsContainer.innerHTML = `FEISTY GIRLS are for just for you lmaooo`; 
    }
    else if (result2 > result1 && result2 > result3 && result2 > result4 && result2 > result5 && result2 > result6 && result2 > result7){
      resultsContainer.innerHTML = `SUBMISSIVE GIRLS are just for you lmaooo`;
    }
    else if (result3 > result1 && result3 > result2 && result3 > result4 && result3 > result5 && result3 > result6 && result3 > result7){
      resultsContainer.innerHTML = `GEEKY GIRLS are just for you lmaooo`;
    }
    else if (result4 > result1 && result4 > result2 && result4 > result3 && result4 > result5 && result4 > result6 && result4 > result7){
      resultsContainer.innerHTML = `GEEKY GIRLS are just for you lmaooo`;
    }
    else if (result5 > result1 && result5 > result2 && result5 > result3 && result5 > result4 && result5 > result6 && result5 > result7){
      resultsContainer.innerHTML = `GEEKY GIRLS are just for you lmaooo`;
    }
    else if (result6 > result1 && result6 > result2 && result6 > result3 && result6 > result4 && result6 > result5 & result6 > result7){
      resultsContainer.innerHTML = `GEEKY GIRLS are just for you lmaooo`;
    }
    else if (result7 > result1 && result7 > result2 && result7 > result3 && result7 > result4 && result7 > result5 & result7 > result6){
      resultsContainer.innerHTML = `GEEKY GIRLS are just for you lmaooo`;
    }else{
      console.log("SOMETHING IS WRONG!!!!")
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