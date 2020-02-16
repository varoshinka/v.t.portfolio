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

$(".locale").on("mouseover", function() {
  $("#blackEye > img").attr("src", "img/icons/eye-black-open.png");
  $(".dots").css("visibility", "visible");
  $(".single-dot").css("visibility", "visible");
});

$(".locale").on("mouseout", function() {
  $("#blackEye > img").attr("src", "img/icons/eye-black-closed.png");
  $(".dots").css("visibility", "hidden");
  $(".single-dot").css("visibility", "hidden");
});

$(".dot").on("mouseout", function() {
  $(this)
    .find(".single-dot")
    .css("opacity", "1");

  $(this)
    .find("img")
    .css("opacity", "0");
});

$(".dot").on("mouseover", function() {
  $(this)
    .find(".single-dot")
    .css("opacity", "0");

  $(this)
    .find("img")
    .css("opacity", "1");
});
