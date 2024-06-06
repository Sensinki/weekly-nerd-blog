console.log("are you working?");

// // Search button
// const searchBox = document.getElementById("searchBox"),
//     searchIcon = document.getElementById("searchIcon");

// searchIcon.onclick = function () {
//     searchBox.classList.toggle("active");
// };

// <li> and <a>
var listItems = document.querySelectorAll("#blogList li");
listItems.forEach(function (li) {
    li.addEventListener("click", function () {
        var link = this.querySelector("a");
        if (link) {
            link.click();
        }
    });
});




