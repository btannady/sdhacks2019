(function() {
  const myQuestions = [
    {
      question: "What do you enjoy doing in your free time?",
      answers: {
        a: "Reading", 
        b: "Programming", 
        c: "Exercising", 
        d: "Playing with squirrels",
        e: "Gaming", 
        f: "Looking at memes", 
        g: "Partying" 
      },
      result1Answer: "e", 
      result2Answer: "c", 
      result3Answer: "f", 
      result4Answer: "d", 
      result5Answer: "g", 
      result6Answer: "a", 
      result7Answer: "b" 

    },
    {
      question: "Favorite social media?",
      answers: {
        a: "Reddit",
        b: "Github",
        c: "4chan",
        d: "Snapchat",
        e: "Instagram",
        f: "Twitter",
        g: "Linkedin"

      },
      result1Answer: "a",
      result2Answer: "e",
      result3Answer: "f",
      result4Answer: "c",
      result5Answer: "d",
      result6Answer: "g",
      result7Answer: "b"
    },
    {
      question: "What is your favorite video game?",
      answers: {
        a: "Fortnite",
        b: "Call of Duty",
        c: "Tetris",
        d: "Mario",
        e: "Roblox",
        f: "Minecraft",
        g: "Quizlet"
      },
      result1Answer: "f",
      result2Answer: "a",
      result3Answer: "c",
      result4Answer: "d",
      result5Answer: "b",
      result6Answer: "g",
      result7Answer: "e"
    },
    {
      question: "What kind of social enviornment are you most comfortable in?",
      answers: {
        a: "Only if I'm giving a presentation",
        b: "Depends on the people...",
        c: "Where's the party?",
        d: "Only 1-1 conversations",
        e: "Pretty social",
        f: "IDK, I'm so wasted xD",
        g: "What are friends?"
      },
      result1Answer: "e",
      result2Answer: "f",
      result3Answer: "d",
      result4Answer: "b",
      result5Answer: "c",
      result6Answer: "g",
      result7Answer: "a"
      
    },
    {
      question: "What is your favorite food?",
      answers: {
        a: "McDonalds",
        b: "Avocado Toast",
        c: "Cereal",
        d: "Korean BBQ",
        e: "Spaghetti and Meatballs",
        f: "Raw fish lmao",
        g: "Tacos"
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
      question: "What is your favorite sport?",
      answers: {
        a: "Boxing",
        b: "Soccer",
        c: "Slapping ",
        d: "Chess",
        e: "Table Tennis",
        f: "Hunting",
        g: "E-Sports"
      },
      result1Answer: "g",
      result2Answer: "a",
      result3Answer: "c",
      result4Answer: "f",
      result5Answer: "b",
      result6Answer: "d",
      result7Answer: "e"
      
    },

    {
      question: "Where would one find you on campus?",
      answers: {
        a: "Library",
        b: "Playing Smash",
        c: "Club Events",
        d: "CS Lab",
        e: "Dining Hall",
        f: "On a date",
        g: "Chasing raccoons"
      },
      result1Answer: "b",
      result2Answer: "f",
      result3Answer: "e",
      result4Answer: "g",
      result5Answer: "c",
      result6Answer: "a",
      result7Answer: "d"
      
    },

    {
      question: "What is your favorite word/phrase?",
      answers: {
        a: "Stoopid",
        b: "Frick",
        c: "No cap",
        d: "Hello World",
        e: "Hmm...Ironic",
        f: "Savage",
        g: "Yeet"
      },
      result1Answer: "b",
      result2Answer: "f",
      result3Answer: "g",
      result4Answer: "a",
      result5Answer: "c",
      result6Answer: "d",
      result7Answer: "e"
      
    },

    {
      question: "Who is your favorite singer?",
      answers: {
        a: "Joji",
        b: "6ix9ine",
        c: "Jake Paul",
        d: "Weird Al Yankovic",
        e: "Post Malone",
        f: "I only listen to video game music",
        g: "Kendrick Lamar"
      },
      result1Answer: "b",
      result2Answer: "c",
      result3Answer: "e",
      result4Answer: "a",
      result5Answer: "g",
      result6Answer: "f",
      result7Answer: "d"
      
    }



  ];

/*------------------------------------------------------------------*/
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

/*------------------------------------------------------------------*/
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

/*------------------------------------------------------------------*/
    // show final results based on which 'result count' contains the highest corresponding answers out of total
    if (result1 > result2 && result1 > result3 && result1 > result4 && result1 > result5 && result1 > result6 && result1 > result7){
      resultsContainer.innerHTML = `Pewdiepie is your Youtuber!!`;
      var image = document.getElementById("myImg");
      image.src = "https://ichef.bbci.co.uk/news/660/cpsprodpb/BC3A/production/_92868184_gettyimages-494848232.jpg"; 
    }
    else if (result2 > result1 && result2 > result3 && result2 > result4 && result2 > result5 && result2 > result6 && result2 > result7){
      resultsContainer.innerHTML = `Logan Paul is your Youtuber!!`;
      var image = document.getElementById("myImg");
      image.src = "https://image.businessinsider.com/5a82f6b6d03072bf0e8b458e?width=1100&format=jpeg&auto=webp"; 
    }
    else if (result3 > result1 && result3 > result2 && result3 > result4 && result3 > result5 && result3 > result6 && result3 > result7){
      resultsContainer.innerHTML = 'H3H3 is your Youtuber!!';
      var image = document.getElementById("myImg");
      image.src = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ffruzsinaeordogh%2Ffiles%2F2016%2F05%2Fethan-and-hila1-1200x622.jpg"; 
    }
    else if (result4 > result1 && result4 > result2 && result4 > result3 && result4 > result5 && result4 > result6 && result4 > result7){
      resultsContainer.innerHTML = `iDubbbz is your Youtuber!!`;
      var image = document.getElementById("myImg");
      image.src = "https://i.ytimg.com/vi/WPviAKaHAN0/maxresdefault.jpg"; 
    }
    else if (result5 > result1 && result5 > result2 && result5 > result3 && result5 > result4 && result5 > result6 && result5 > result7){
      resultsContainer.innerHTML = `Cody Ko is your Youtuber!!`;
      var image = document.getElementById("myImg");
      image.src = "https://d3gx1wgrn4cpnk.cloudfront.net/uploads/2019/04/Screen-Shot-2019-02-20-at-9.13.50-PM.png"; 
    }
    else if (result6 > result1 && result6 > result2 && result6 > result3 && result6 > result4 && result6 > result5 & result6 > result7){
      resultsContainer.innerHTML = `TechLead is your Youtuber!!`;
      var image = document.getElementById("myImg");
      image.src = "https://i.ytimg.com/vi/fssFXlNk6vw/maxresdefault.jpg"; 
    }
    else if (result7 > result1 && result7 > result2 && result7 > result3 && result7 > result4 && result7 > result5 & result7 > result6){
      resultsContainer.innerHTML = `Michael Reemes is your Youtuber!!`;
      var image = document.getElementById("myImg");
      image.src = "https://celebslifereel.com/wp-content/uploads/2019/02/Michael-Reeves.jpg"; 
    }else{
      console.log("SOMETHING IS WRONG!!!!")
    }
  
  }

/*------------------------------------------------------------------*/
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

/*------------------------------------------------------------------*/
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

/*------------------------------------------------------------------*/
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

/*------------------------------------------------------------------*/
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