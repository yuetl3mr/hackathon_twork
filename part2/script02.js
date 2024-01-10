const Test = document.querySelector(".Text");
const Document = document.querySelector(".Document");

Test.onclick = function() {
    if (!Test.classList.contains("Blue")) {
        Test.classList.add("Blue");
        Document.classList.remove("Blue");
    }
};

Document.onclick = function() {
    if (!Document.classList.contains("Blue")) {
        Document.classList.add("Blue");
        Test.classList.remove("Blue");
    }
};
