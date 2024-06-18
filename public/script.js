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


// removing words from long paragraphs
$(document).ready(function() {
    $('#blogList li p').each(function() {
        var lineHeight = parseInt($(this).css('line-height'));
        var maxHeight = lineHeight * 3; 
        var actualHeight = $(this).height();

        if (actualHeight > maxHeight) {
            var truncatedText = $(this).text().trim().substring(0, maxHeight / lineHeight - 1).trim();
            $(this).text(truncatedText + '...');
        }
    });
});



