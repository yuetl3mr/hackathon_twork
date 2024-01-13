const Test = document.querySelector(".Text");
const Document = document.querySelector(".Document");
const EnterYourPromtHere = document.querySelector(".EnterYourPromtHere");
const Rectangle238 = document.querySelector(".Rectangle238");
const Start = document.querySelector(".Start");
const fileInput = document.querySelector(".fileInput");
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
const Main_1 = document.querySelector(".Main_1");
const Main_2 = document.querySelector(".Main2");
let questions = [];
let ourData = "";
EnterYourPromtHere.classList.remove("disappear");
Rectangle238.classList.add("disappear");
Questions.classList.remove("disappear");
 Answers.classList.add("disappear");   
 Explanationinfo.classList.add("disappear");
 GetExplanation_btn.classList.remove("disappear");
 Question.textContent= questions[0].nameQuestion;
 Answer.innerText = questions[0].answer;
 var currentText = nextPage.innerText.split('/');
 currentText[1] = questions.length + 1;
 nextPage.innerText = currentText.join('/');
Main_1.classList.remove("disappear");
Main_2.classList.add("disappear");
Test.onclick = function() {
    if (!Test.classList.contains("Blue")) {
        Test.classList.add("Blue");
        Document.classList.remove("Blue");
    }
    EnterYourPromtHere.classList.remove("disappear");
    Rectangle238.classList.add("disappear");
};

Document.onclick = function() {
    if (!Document.classList.contains("Blue")) {
        Document.classList.add("Blue");
        Test.classList.remove("Blue");
    }
    EnterYourPromtHere.classList.add("disappear");
    Rectangle238.classList.remove("disappear");
};

// Chỉnh tên file
function displayFileName() {
    var fileInput = document.getElementById('fileInput');
    var label = document.querySelector('.InsertHere');

    if (fileInput.files.length > 0) {
        label.innerHTML = fileInput.files[0].name;
    } else {
        label.innerHTML = "Insert here";
    }
}

function displayFullFileName() {
    var fileInput = document.getElementById('fileInput');
    var label = document.querySelector('.InsertHere');

    if (fileInput.files.length > 0) {
        label.innerHTML = fileInput.files[0].name;
    }
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
  
    switch (event.key) {
      case "Enter":
        if (EnterYourPromtHere.value.trim() === '') {
                // Thêm lớp CSS để đổi màu khung thành đỏ
                EnterYourPromtHere.parentElement.classList.add('error-border');
        }
        else {
            // Nếu có nội dung, xóa lớp CSS để khôi phục màu khung gốc
            EnterYourPromtHere.parentElement.classList.remove('error-border');
            window.location.href = 'http://127.0.0.1:5500/part5/index05.html';
        }
        // code for "down arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);

  EnterYourPromtHere.addEventListener('focusout', function () {
    if (EnterYourPromtHere.value.trim() === '') {
       // Thêm lớp CSS để đổi màu khung thành đỏ
       EnterYourPromtHere.parentElement.classList.add('error-border');
    } else {
        // Nếu có nội dung, xóa lớp CSS để khôi phục màu khung gốc
        EnterYourPromtHere.parentElement.classList.remove('error-border');
    }
});

Start.onclick = function(event) {
    if (EnterYourPromtHere.value.trim() === '') {
        event.preventDefault();
    }
    if (EnterYourPromtHere.value.trim() === '') {
        // Thêm lớp CSS để đổi màu khung thành đỏ
        EnterYourPromtHere.parentElement.classList.add('error-border');
     } else {
         // Nếu có nội dung, xóa lớp CSS để khôi phục màu khung gốc
         event.preventDefault();
         console.log(EnterYourPromtHere.value);
         EnterYourPromtHere.parentElement.classList.remove('error-border');
         buildData(EnterYourPromtHere.value);
     }
}

EnterYourPromtHere.addEventListener('input', function () {
    if (EnterYourPromtHere.value.trim() === '') {
        // Thêm lớp CSS để đổi màu khung thành đỏ
        EnterYourPromtHere.classList.add('error-border');
    } else {
        // Nếu có nội dung, xóa lớp CSS để khôi phục màu khung gốc
        EnterYourPromtHere.classList.remove('error-border');
    }
});

function buildData(data) {
    const { OpenAIClient, AzureKeyCredential } = require('@azure/openai');
    const endpoint = 'https://sunhackathon18.openai.azure.com'
    const azureApiKey = '6dfa1da1a2ad4165b1ba1e7b0d60b6fe'
    let random = Math.random() + 10;
    userInput = `Tạo cho tôi ${random} flashcards ${data} với form như thế này chú ý định nghĩa bằng tiếng việt và phải siêu ngắn gọn : "Thuật ngữ - Định nghĩa"`; // Input text ở đây 
    const messages = [
        { role: "user", content: userInput },
    ];  
    
    async function main() {
        const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
        const deploymentId = "GPT35TURBO";
        const result = await client.getChatCompletions(deploymentId, messages);
        for (const choice of result.choices) {
        ourData = ourData + choice.message.content;
        }
        console.log(ourData);
        uppdateData(ourData);
    }
    
    main().catch((err) => {
        console.error("The sample encountered an error:", err);
    });
    module.exports = { main };
}

    const Datas = ourData.split('\n');
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
