$(".closedEye > a > img").on("mouseover", function() {
  $(this).attr("src", "img/icons/eye-opened.png");
  $(this)
    .parent()
    .siblings("span")
    .css("display", "flex");
});

$(".closedEye > a > img").on("mouseout", function() {
  $(this).attr("src", "img/icons/eye-closed.png");
  $(this)
    .parent()
    .siblings("span")
    .css("display", "none");
});

$(".locale > img").on("mouseover", function() {
  $(this).attr("src", "img/icons/eye-black-open.png");
});

$(".locale > img").on("mouseout", function() {
  $(this).attr("src", "img/icons/eye-black-closed.png");
});
