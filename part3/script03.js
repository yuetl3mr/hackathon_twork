const Ellipse46 = document.querySelector(".Ellipse46");
const Ellipse47 = document.querySelector(".Ellipse47");
const choises = document.querySelectorAll(".choise");
const Question = document.querySelector(".Question");
const Answer1 = document.querySelector(".Answer1");
const Answer2 = document.querySelector(".Answer2");
const Answer3 = document.querySelector(".Answer3");
const Answer4 = document.querySelector(".Answer4");
const select = document.querySelector(".select");
const AlSupport = document.querySelector(".AlSupport");
const nextPage = document.querySelector(".nextPage");
let questions = [];

let correctAnswer = ["Thao" , "Thach" , "Hoang"];

let answeredQuestions = [];


fetch('../data_file/Quiz.txt')
  .then(response => response.text())
  .then(data => {
        const Datas = data.split('\n');
        // Xử lý dữ liệu ở đây
        let count = 0;
        let dataQuestion = {};
        for(let i = 0 ; i < Datas.length ; i++) {
            if(count < 5) {
                switch(count) {
                    case 0:
                        dataQuestion['nameQuestion'] = Datas[i].trim();
                        break;
                    case 1:
                        dataQuestion['answer1'] = Datas[i].trim();
                        break;
                    case 2:
                        dataQuestion['answer2'] = Datas[i].trim();
                        break;
                    case 3:
                        dataQuestion['answer3'] = Datas[i].trim();
                        break;
                    case 4:
                        dataQuestion['answer4'] = Datas[i].trim();
                        break;
                    default:
                        break;
                }
                count++;
            }
            if(count === 5) {
                count = 0;
                questions.push(dataQuestion);
                dataQuestion = {};
            }
        }
        // console.log(questions);
        AlSupport.classList.add("disappear");
        Question.textContent= questions[0].nameQuestion;
        Answer1.innerText = questions[0].answer1;
        Answer2.innerText = questions[0].answer2;
        Answer3.innerText = questions[0].answer3;
        Answer4.innerText = questions[0].answer4;
        var currentText = nextPage.innerText.split('/');
        currentText[1] = questions.length + 1;
        nextPage.innerText = currentText.join('/');
        Ellipse46.onclick = function() {
            var textElement = document.querySelector(".nextPage");
            var currentText = textElement.innerText.split('/');
            if(currentText[0] > questions.length) {
                select.classList.add("disappear");
                Question.innerText =  "THE TEST HAS BEEN COMPLETED !";
            }
            if (currentText[0] < parseInt(currentText[1])) {  
                currentText[0] = parseInt(currentText[0]) + 1;
                textElement.innerText = currentText.join('/');
                choises.forEach(choise => {
                    const Rectangle133 = choise.querySelector(".Rectangle133");
                    Rectangle133.classList.remove("correct-choice");
                })
            }
            if (currentText[0] <= questions.length) {
                Question.innerText = questions[currentText[0] - 1].nameQuestion;
                Answer1.innerText = questions[currentText[0] - 1].answer1;
                Answer2.innerText = questions[currentText[0] - 1].answer2;
                Answer3.innerText = questions[currentText[0] - 1].answer3;
                Answer4.innerText = questions[currentText[0] - 1].answer4;
                // Check if the question has been answered
                if (answeredQuestions.includes(currentText[0])) {
                    // Display the correct answer
                    if (correctAnswer[currentText[0] - 1] === Answer1.innerText) {
                        Answer1.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer2.innerText) {
                        Answer2.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer3.innerText) {
                        Answer3.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer4.innerText) {
                        Answer4.previousElementSibling.classList.add("correct-choice");
                    }
                    
                }
            }

            AlSupport.classList.add("disappear");
            select.classList.remove("disappear"); 
            if(currentText[0] > questions.length) {
                select.classList.add("disappear");
                Question.innerText =  "THE TEST HAS BEEN COMPLETED !";
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
                choises.forEach(choise => {
                    const Rectangle133 = choise.querySelector(".Rectangle133");
                    Rectangle133.classList.remove("correct-choice");
                })
            }
            if(currentText[0] <= questions.length) {
                Question.innerText = questions[currentText[0] - 1].nameQuestion;
                Answer1.innerText = questions[currentText[0] - 1].answer1;
                Answer2.innerText = questions[currentText[0] - 1].answer2;
                Answer3.innerText = questions[currentText[0] - 1].answer3;
                Answer4.innerText = questions[currentText[0] - 1].answer4;
                if (answeredQuestions.includes(currentText[0])) {
                    // Display the correct answer
                    if (correctAnswer[currentText[0] - 1] === Answer1.innerText) {
                        Answer1.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer2.innerText) {
                        Answer2.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer3.innerText) {
                        Answer3.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer4.innerText) {
                        Answer4.previousElementSibling.classList.add("correct-choice");
                    }
                }
            }

            AlSupport.classList.add("disappear");
            select.classList.remove("disappear");
        }


        choises.forEach(choise => {
            choise.onclick = function() {
                var currentText = nextPage.innerText.split('/');
                const Rectangle133 = choise.querySelector(".Rectangle133");
                if (!answeredQuestions.includes(parseInt(currentText[0])) && choise.innerText !== correctAnswer[currentText[0] - 1] && currentText[0] <= questions.length) {
                    // Thêm hiệu ứng màu đỏ khi chọn sai
                    Rectangle133.classList.add("incorrect-choice");
                    
                    // Biến mất chọn sai và xuất hiện chọn đúng
                    Rectangle133.classList.add("fade-in");
                    setTimeout(() => {
                        Rectangle133.classList.remove("fade-in");
                        Rectangle133.classList.remove("incorrect-choice");
                        AlSupport.classList.remove("disappear");
                        select.classList.add("disappear");
                    }, 700);
                    answeredQuestions.push(parseInt(currentText[0]));
                } else if (!answeredQuestions.includes(parseInt(currentText[0])) && currentText[0] <= questions.length) {
                    // Chọn đúng
                    if (currentText[0] <= questions.length) {
                        
                        // Thêm hiệu ứng màu xanh khi chọn đúng
                        Rectangle133.classList.add("correct-choice");
                        
                        // Biến mất chọn đúng và xuất hiện chọn sai
                        Rectangle133.classList.add("fade-in");
                        setTimeout(() => {
                            Rectangle133.classList.remove("fade-in");
                        }, 500);
                        setTimeout(() => {
                            Rectangle133.classList.remove("correct-choice");
                        }, 700);
            
                        // Đánh dấu là đã trả lời cho câu hỏi này
                        answeredQuestions.push(parseInt(currentText[0]));
                    }
            
                    if (currentText[0] <= questions.length) {
                        currentText[0] = parseInt(currentText[0]) + 1;
                        nextPage.innerText = currentText.join('/');
                    }
                    if(currentText[0] <= questions.length) {
                        Question.innerText = questions[currentText[0] - 1].nameQuestion;
                        Answer1.innerText = questions[currentText[0] - 1].answer1;
                        Answer2.innerText = questions[currentText[0] - 1].answer2;
                        Answer3.innerText = questions[currentText[0] - 1].answer3;
                        Answer4.innerText = questions[currentText[0] - 1].answer4;
                    }
                }
                if(currentText[0] > questions.length) {
                    setTimeout(() => {
                        select.classList.add("disappear");
                        Question.innerText =  "THE TEST HAS BEEN COMPLETED !";
                    }, 500);
                }
            };
            
        });





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


        // Thao tác với bàn phím

        window.addEventListener("keydown", function (event) {
            if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
            }
        
            switch (event.key) {
            case "ArrowLeft":
                // Get the element with the class '7'
            var textElement = document.querySelector(".nextPage");
            // Get the current text content and split it into an array
            var currentText = textElement.innerText.split('/');
            // Increment the numerator (first part of the array)
            if(currentText[0] > 1) {  
                currentText[0] = parseInt(currentText[0]) - 1;
                // Update the text content
                textElement.innerText = currentText.join('/');
                choises.forEach(choise => {
                    const Rectangle133 = choise.querySelector(".Rectangle133");
                    Rectangle133.classList.remove("correct-choice");
                })
            }
            if(currentText[0] <= questions.length) {
                Question.innerText = questions[currentText[0] - 1].nameQuestion;
                Answer1.innerText = questions[currentText[0] - 1].answer1;
                Answer2.innerText = questions[currentText[0] - 1].answer2;
                Answer3.innerText = questions[currentText[0] - 1].answer3;
                Answer4.innerText = questions[currentText[0] - 1].answer4;
                if (answeredQuestions.includes(currentText[0])) {
                    // Display the correct answer
                    if (correctAnswer[currentText[0] - 1] === Answer1.innerText) {
                        Answer1.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer2.innerText) {
                        Answer2.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer3.innerText) {
                        Answer3.previousElementSibling.classList.add("correct-choice");
                    } else if (correctAnswer[currentText[0] - 1] === Answer4.innerText) {
                        Answer4.previousElementSibling.classList.add("correct-choice");
                    }
                }
            }

            AlSupport.classList.add("disappear");
            select.classList.remove("disappear");
                break;
            case "ArrowRight":
                // code for "right arrow" key press.
                var textElement = document.querySelector(".nextPage");
                var currentText = textElement.innerText.split('/');
                if(currentText[0] > questions.length) {
                    select.classList.add("disappear");
                    Question.innerText =  "THE TEST HAS BEEN COMPLETED !";
                }
                if (currentText[0] < parseInt(currentText[1])) {  
                    currentText[0] = parseInt(currentText[0]) + 1;
                    textElement.innerText = currentText.join('/');
                    choises.forEach(choise => {
                        const Rectangle133 = choise.querySelector(".Rectangle133");
                        Rectangle133.classList.remove("correct-choice");
                    })
                }
                
                if (currentText[0] <= questions.length) {
                    Question.innerText = questions[currentText[0] - 1].nameQuestion;
                    Answer1.innerText = questions[currentText[0] - 1].answer1;
                    Answer2.innerText = questions[currentText[0] - 1].answer2;
                    Answer3.innerText = questions[currentText[0] - 1].answer3;
                    Answer4.innerText = questions[currentText[0] - 1].answer4;
                    // Check if the question has been answered
                    if (answeredQuestions.includes(currentText[0])) {
                        // Display the correct answer
                        if (correctAnswer[currentText[0] - 1] === Answer1.innerText) {
                            Answer1.previousElementSibling.classList.add("correct-choice");
                        } else if (correctAnswer[currentText[0] - 1] === Answer2.innerText) {
                            Answer2.previousElementSibling.classList.add("correct-choice");
                        } else if (correctAnswer[currentText[0] - 1] === Answer3.innerText) {
                            Answer3.previousElementSibling.classList.add("correct-choice");
                        } else if (correctAnswer[currentText[0] - 1] === Answer4.innerText) {
                            Answer4.previousElementSibling.classList.add("correct-choice");
                        }
                        
                    }
                }
            
                AlSupport.classList.add("disappear");
                select.classList.remove("disappear"); 
                if(currentText[0] > questions.length) {
                    select.classList.add("disappear");
                    Question.innerText =  "THE TEST HAS BEEN COMPLETED !";
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

