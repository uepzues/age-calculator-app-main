$(document).ready(function () {
  $("button").click(function (e) {
    const dayInValue = $("#dayIn").val();
    const monthInValue = $("#monthIn").val();
    const yearInValue = $("#yearIn").val();

    const dayIn =
      dayInValue === "" || isNaN(dayInValue) ? null : parseInt(dayInValue);
    const monthIn =
      monthInValue === "" || isNaN(monthInValue)
        ? null
        : parseInt(monthInValue);
    const yearIn =
      yearInValue === "" || isNaN(yearInValue) ? null : parseInt(yearInValue);

    const date = new Date();
    const dateIn = new Date(yearIn, monthIn - 1, dayIn);

    const timeDiff = date - dateIn;

    const yearOut = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000)); //
    const monthOut = Math.floor(
      (timeDiff % (365.25 * 24 * 60 * 60 * 1000)) /
        (30.44 * 24 * 60 * 60 * 1000)
    );
    const daysOut = Math.floor(
      (timeDiff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );

    $("#day, #month, #year").removeClass("error");

    const isValidDay =
      dayIn >= 1 && dayIn <= parseInt(new Date(yearIn, monthIn, 0).getDate());
    const isValidMonth = monthIn >= 1 && monthIn <= 12;
    const isValidYear = yearIn >= 1900 && yearIn <= date.getFullYear();

    if (dayInValue === "") {
      $("#day").addClass("error");
      $("#daysOut").text("--");
      $(".errorBotDay").css("display", "none");
      $(".reqFieldDay").css("display", "initial");
    } else if (!isValidDay) {
      $("#day").addClass("error");
      $("#daysOut").text("--");
      $(".errorBotDay").css("display", "initial");
      $(".reqFieldDay").css("display", "none");
    } else {
      $("#daysOut").text(daysOut.toString().padStart(2, "0"));
      $(".reqFieldDay").css("display", "none");
      $(".errorBotDay").css("display", "none");
    }
    if (monthInValue === "") {
      $("#month").addClass("error");
      $("#monthOut").text("--");
      $(".errorBotMonth").css("display", "none");
      $(".reqFieldMonth").css("display", "initial");
    } else if (!isValidMonth) {
      $("#month").addClass("error");
      $("#monthOut").text("--");
      $(".errorBotMonth").css("display", "initial");
      $(".reqFieldMonth").css("display", "none");
    } else {
      $("#monthOut").text(monthOut.toString().padStart(2, "0"));
      $(".errorBotMonth").css("display", "none");
      $(".reqFieldMonth").css("display", "none");
    }

    if (yearInValue === "") {
      $("#year").addClass("error");
      $("#yearOut").text("--");
      $(".errorBotYear").css("display", "none");
      $(".reqFieldYear").css("display", "initial");
    } else if (yearInValue < 1900) {
      alert("Must be at least 1900");
    } else if (!isValidYear) {
      $("#year").addClass("error");
      $("#yearOut").text("--");
      $(".errorBotYear").css("display", "initial");
      $(".reqFieldYear").css("display", "none");
    } else {
      $("#yearOut").text(yearOut.toString().padStart(2, "0"));
      $(".errorBotYear").css("display", "none");
      $(".reqFieldYear").css("display", "none");
    }

    if (
      dateIn > date ||
      !isValidDay ||
      !isValidMonth ||
      !isValidYear ||
      isNaN(dateIn)
    ) {
      $("#daysOut, #monthOut, #yearOut").text("--");
    }
  });
});
