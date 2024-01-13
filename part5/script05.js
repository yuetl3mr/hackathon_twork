const Ellipse46 = document.querySelector(".Ellipse46");
const Ellipse47 = document.querySelector(".Ellipse47");
const choises = document.querySelectorAll(".choise");
const Question = document.querySelector(".Question");
const nextPage = document.querySelector(".nextPage"); 
const Questions = document.querySelector(".Questions");
const Answers = document.querySelector(".Answers");
const Answer = document.querySelector(".Answer");
const GetExplanation_btn = document.querySelector(".GetExplanation-btn");
const Explanationinfo = document.querySelector(".Explanationinfo");
let questions = [];
fetch('../data_file/flashcard_data.txt')
  .then(response => response.text())
  .then(data => {
    const Datas = data.split('\n');
    // Xử lý dữ liệu ở đây
      for(var i = 0 ; i < Datas.length ; ++i) {
        let Data = Datas[i].trim();
        let position = Data.indexOf('-');
        let dataNameQuestion = "";
        let dataAnswer = "";
        for(let i = 0 ; i < position ; ++i) 
          dataNameQuestion = dataNameQuestion + Data[i];
      for(let i = position + 1 ; i < Data.length  ; ++i)
          dataAnswer = dataAnswer + Data[i];
        let dataQuestion = {
          nameQuestion : dataNameQuestion,
          answer: dataAnswer
        }
        questions.push(dataQuestion);
  }
 Questions.classList.remove("disappear");
 Answers.classList.add("disappear");   
 Explanationinfo.classList.add("disappear");
 GetExplanation_btn.classList.remove("disappear");
 Question.textContent= questions[0].nameQuestion;
 Answer.innerText = questions[0].answer;
 var currentText = nextPage.innerText.split('/');
 currentText[1] = questions.length + 1;
 nextPage.innerText = currentText.join('/');
//  for(let i = 0 ; i < questions.length ; ++i)
//   console.log(questions[i]);
 Ellipse46.onclick = function() {
     var textElement = document.querySelector(".nextPage");
     var currentText = textElement.innerText.split('/');
     if (currentText[0] < parseInt(currentText[1])) {  
         currentText[0] = parseInt(currentText[0]) + 1;
         textElement.innerText = currentText.join('/');
         choises.forEach(choise => {
             const Rectangle133 = choise.querySelector(".Rectangle133");
             Rectangle133.classList.remove("correct-choice");
         })
     }
     Explanationinfo.classList.add("disappear");
     Answers.classList.add("disappear");
     Questions.classList.remove("disappear");
     if (currentText[0] <= questions.length) {
         Question.innerText = questions[currentText[0] - 1].nameQuestion;
         Answer.innerText = questions[currentText[0] - 1].answer;
     }
 
     if(currentText[0] > questions.length) {
         Question.innerText =  "THE FLASHCARDS HAS BEEN COMPLETED !";
         Answer.classList.add("disppear");
     }
 }
  
 Ellipse47.onclick  = function() {
     // Get the element with the class '7'
     var textElement = document.querySelector(".nextPage");
     // Get the current text content and split it into an array
     var currentText = textElement.innerText.split('/');
     // Increment the numerator (first part of the array)
     if(currentText[0] > 1) {  
         currentText[0] = parseInt(currentText[0]) - 1;
         // Update the text content
         textElement.innerText = currentText.join('/');
     }
 
     Answers.classList.add("disappear");
     Questions.classList.remove("disappear");
     Explanationinfo.classList.add("disappear");
     if(currentText[0] <= questions.length) {
         Question.innerText = questions[currentText[0] - 1].nameQuestion;
         Answer.innerText = questions[currentText[0] - 1].answer;
     }
 }

 function autoAdjustFontSize() {
     const questionContainer = document.getElementById('dynamicText');
     const containerWidth = questionContainer.clientWidth;
     const containerHeight = questionContainer.clientHeight;
 
     // Set a base font size (you can adjust this based on your needs)
     let fontSize = 40;
 
     // Check if the content overflows horizontally
     while (questionContainer.scrollWidth > containerWidth) {
       fontSize--;
       questionContainer.style.fontSize = `${fontSize}px`;
     }
 
     // Check if the content overflows vertically
     while (questionContainer.scrollHeight > containerHeight) {
       fontSize--;
       questionContainer.style.fontSize = `${fontSize}px`;
     }
   }
 
   // Call the function on window load or when the content changes
   window.onload = autoAdjustFontSize;
 
 
 Answer.onclick = function() {
    
     Answers.classList.add("disappear");
     Questions.classList.remove("disappear");
 
     // Adding a delay before adding the 'appear' class to ensure the fade-out effect is visible
     setTimeout(function() {
         Answers.classList.remove("appear");
     }, 10000); // 500 milliseconds delay, adjust as needed
 }
 
 
 Question.onclick = function() {
     var textElement = document.querySelector(".nextPage");
     var currentText = textElement.innerText.split('/');
     if(currentText[0] <= questions.length) {
         Questions.classList.add("disappear");
         Answers.classList.remove("disappear");
 
         // Adding a delay before adding the 'appear' class to ensure the fade-out effect is visible
         setTimeout(function() {
             Questions.classList.remove("appear");
         }, 10000); // 500 milliseconds delay, adjust as needed
     }   
 }
 
 GetExplanation_btn.onclick = function() {
     Explanationinfo.classList.remove("disappear");
     GetExplanation_btn.classList.add("appear");
 }
 
 window.addEventListener("keydown", function (event) {
     if (event.defaultPrevented) {
       return; // Do nothing if the event was already processed
     }
   
     switch (event.key) {
       case "ArrowDown":
         // code for "down arrow" key press.
         Answers.classList.add("disappear");
         Questions.classList.remove("disappear");
     
         // Adding a delay before adding the 'appear' class to ensure the fade-out effect is visible
         setTimeout(function() {
             Answers.classList.remove("appear");
         }, 10000); // 500 milliseconds delay, adjust as needed
         break;
       case "ArrowUp":
         // code for "up arrow" key press.
         var textElement = document.querySelector(".nextPage");
         var currentText = textElement.innerText.split('/');
         if(currentText[0] <= questions.length) {
             Questions.classList.add("disappear");
             Answers.classList.remove("disappear");
     
             // Adding a delay before adding the 'appear' class to ensure the fade-out effect is visible
             setTimeout(function() {
                 Questions.classList.remove("appear");
             }, 10000); // 500 milliseconds delay, adjust as needed
         }   
         break;
       case "ArrowLeft":
         // code for "left arrow" key press.
          // Get the element with the class '7'
     var textElement = document.querySelector(".nextPage");
     // Get the current text content and split it into an array
     var currentText = textElement.innerText.split('/');
     // Increment the numerator (first part of the array)
     if(currentText[0] > 1) {  
         currentText[0] = parseInt(currentText[0]) - 1;
         // Update the text content
         textElement.innerText = currentText.join('/');
     }
 
     Answers.classList.add("disappear");
     Questions.classList.remove("disappear");
     Explanationinfo.classList.add("disappear");
     if(currentText[0] <= questions.length) {
         Question.innerText = questions[currentText[0] - 1].nameQuestion;
         Answer.innerText = questions[currentText[0] - 1].answer;
     }
         break;
       case "ArrowRight":
         // code for "right arrow" key press.
         var textElement = document.querySelector(".nextPage");
         var currentText = textElement.innerText.split('/');
         if (currentText[0] < parseInt(currentText[1])) {  
             currentText[0] = parseInt(currentText[0]) + 1;
             textElement.innerText = currentText.join('/');
             choises.forEach(choise => {
                 const Rectangle133 = choise.querySelector(".Rectangle133");
                 Rectangle133.classList.remove("correct-choice");
             })
         }
         Explanationinfo.classList.add("disappear");
         Answers.classList.add("disappear");
         Questions.classList.remove("disappear");
         if (currentText[0] <= questions.length) {
             Question.innerText = questions[currentText[0] - 1].nameQuestion;
             Answer.innerText = questions[currentText[0] - 1].answer;
         }
     
         if(currentText[0] > questions.length) {
             Question.innerText =  "THE FLASHCARDS HAS BEEN COMPLETED !";
             Answer.classList.add("disppear");
         }
         break;
       case "Enter":
         if(Questions.classList.contains("disappear")) {
             Explanationinfo.classList.remove("disappear");
             GetExplanation_btn.classList.add("appear");
         }
         break;
         
       default:
         return; // Quit when this doesn't handle the key event.
     }
     // Cancel the default action to avoid it being handled twice
     event.preventDefault();
   }, true);
  })
.catch(error => console.log(error));
