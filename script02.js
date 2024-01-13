const Test = document.querySelector(".Text");
const Document = document.querySelector(".Document");
const EnterYourPromtHere = document.querySelector(".EnterYourPromtHere");
const Rectangle238 = document.querySelector(".Rectangle238");
const Start = document.querySelector(".Start");
const fileInput = document.querySelector(".fileInput");

EnterYourPromtHere.classList.remove("disappear");
Rectangle238.classList.add("disappear");

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
            window.location.href = 'https://www.facebook.com/tuonglai.toi.1/';
        }
        // code for "down arrow" key press.
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }
  
    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  }, true);
  function buildData(data) {
    const { OpenAIClient, AzureKeyCredential } = require('@azure/openai');
    const endpoint = 'https://sunhackathon18.openai.azure.com'
    const azureApiKey = '6dfa1da1a2ad4165b1ba1e7b0d60b6fe'
    let random = Math.random() + 10;
    userInput = `Tạo cho tôi ${random} flashcards với data sau :[ ${data} ]. Chú ý định nghĩa bằng tiếng việt và phải siêu ngắn gọn và theo form sau "Thuật ngữ - Định nghĩa";`; // Input text ở đây 
    const messages = [
        { role: "user", content: userInput },
    ];  
    async function main() {
        const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
        const deploymentId = "GPT35TURBO";
        let ourData = "";
        const result = await client.getChatCompletions(deploymentId, messages);
        for (const choice of result.choices) {
        ourData = ourData + choice.message.content;
        }
        outData(ourData);
    }
    
    main().catch((err) => {
        console.error("The sample encountered an error:", err);
    });
    module.exports = { main };
}
