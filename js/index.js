//================ Loading page ===================
$(window).ready(function () {
  $("#loading").slideUp(3000, function () {
    $("body").css("overflow-y", "scroll");
  });
});

//================= Sidenav ===================
$(".openSide").click(function () {
  $(".sidenav").show(0).animate({ width: "250px" }, 1000);
  $(".openSide").animate({ "margin-left": "250px" }, 1000);
});

$(".exit").click(function () {
  $(".sidenav").animate({ width: "0px" }, 1000).hide(0);
  $(".openSide").animate({ "margin-left": "0px" }, 1000);
});

$(".sidenav img").click(function () {
  let imgSrc = $(this).attr("src");
  $("#home").css({
    backgroundImage: `url(../${imgSrc})`,
    transition: "all 1s",
  });
});

$(".sidenav .link").click(function (e) {
  let linkHref = $(e.target).attr("href");
  let section = $(linkHref).offset().top;
  $("html,body").animate({ scrollTop: section }, 500);
});

// =============== Details =================

$("#singer1").click(function () {
  let sing1Offset = $("#sing1").offset().top;
  if (sing1Offset == 0) {
    $("#sing1").slideDown(500);
    $("#sing2").slideUp(500);
    $("#sing3").slideUp(500);
    $("#sing4").slideUp(500);
  } else {
    $("#sing1").slideUp(500);
  }
});
$("#singer2").click(function () {
  let sing2Offset = $("#sing2").offset().top;
  if (sing2Offset != 0) {
    $("#sing2").slideUp(500);
  } else {
    $("#sing2").slideDown(500);
    $("#sing1").slideUp(500);
    $("#sing3").slideUp(500);
    $("#sing4").slideUp(500);
  }
});
$("#singer3").click(function () {
  let sing3Offset = $("#sing3").offset().top;
  if (sing3Offset != 0) {
    $("#sing3").slideUp(500);
  } else {
    $("#sing3").slideDown(500);
    $("#sing1").slideUp(500);
    $("#sing2").slideUp(500);
    $("#sing4").slideUp(500);
  }
});
$("#singer4").click(function () {
  let sing4Offset = $("#sing4").offset().top;
  if (sing4Offset != 0) {
    $("#sing4").slideUp(500);
  } else {
    $("#sing4").slideDown(500);
    $("#sing1").slideUp(500);
    $("#sing2").slideUp(500);
    $("#sing3").slideUp(500);
  }
});

// ===============  Duration =================

let countDownDate = new Date("July 17, 2023 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  if (distance > 0) {
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $("#day").html(days);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);
  } else {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    $("#day").html(days);
    $("#hour").html(hours);
    $("#minute").html(minutes);
    $("#second").html(seconds);
    clearInterval(x);
    $("#late").html("Unfortunatly You came late ");
  }
}, 500);

// =============== Contact =================

let message = document.getElementById("message");
let counter = 100;
message.addEventListener("input", function (eventInfo) {
  if (eventInfo.data != null && counter != 0) {
    counter--;
    $("#counter").html(counter);
  } else if (eventInfo.data != null && counter == 0) {
    counter = 0;
    alert("You cant enter more than 100 character");
  } else {
    counter += 1;
    $("#counter").html(counter);
  }
});
