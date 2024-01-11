const Test = document.querySelector(".Text");
const Document = document.querySelector(".Document");
const EnterYourPromtHere = document.querySelector(".EnterYourPromtHere");
const Rectangle238 = document.querySelector(".Rectangle238");


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