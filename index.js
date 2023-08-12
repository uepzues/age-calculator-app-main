$(document).ready(function () {
  $("button").click(function (e) {
    const dayInValue = $("#dayIn").val();
    const monthInValue = $("#monthIn").val();
    const yearInValue = $("#yearIn").val();

    const dayIn =
      dayInValue === ""
        ? null
        : isNaN(dayInValue)
        ? "nonNumeric"
        : parseInt(dayInValue);
    const monthIn =
      monthInValue === ""
        ? null
        : isNaN(monthInValue)
        ? "nonNumeric"
        : parseInt(monthInValue);
    const yearIn =
      yearInValue === ""
        ? null
        : isNaN(yearInValue)
        ? "nonNumeric"
        : parseInt(yearInValue);

    const date = new Date();
    const dateIn = new Date(yearIn, monthIn - 1, dayIn);

    const timeDiff = date - dateIn;

    const yearOut = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    const monthOut = Math.floor(
      (timeDiff % (365.25 * 24 * 60 * 60 * 1000)) /
        (30.44 * 24 * 60 * 60 * 1000)
    );
    const daysOut = Math.floor(
      (timeDiff % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );

    $("#day, #month, #year").removeClass("error");

    const isValidDay =
      dayIn >= 1 && dayIn <= new Date(yearIn, monthIn, 0).getDate();
    const isValidMonth = monthIn >= 1 && monthIn <= 12;
    const isValidYear = yearIn >= 1900 && yearIn <= date.getFullYear() + 1;

    if (dayIn == null) {
      $("#day").addClass("error");
      $(".reqFieldDay").css("display", "initial");
      $(".errorBotDay").css("display", "none");
    } else {
      if (!isValidDay || dayIn == "nonNumeric") {
        $("#day").addClass("error");
        $("#daysOut").text("--");
        $(".errorBotDay").css("display", "initial");
        $(".reqFieldDay").css("display", "none");
      } else {
        $("#daysOut").text(daysOut.toString().padStart(2, "0"));
        $(".reqFieldDay").css("display", "none");
        $(".errorBotDay").css("display", "none");
      }
    }

    if (monthIn == null) {
      $("#month").addClass("error");
      $(".reqFieldMonth").css("display", "initial");
      $(".errorBotMonth").css("display", "none");
    } else {
      if (!isValidMonth || monthIn == "nonNumeric") {
        $("#month").addClass("error");
        $("#monthOut").text("--");
        $(".errorBotMonth").css("display", "initial");
        $(".reqFieldMonth").css("display", "none");
      } else {
        $("#monthOut").text(monthOut.toString().padStart(2, "0"));
        $(".reqFieldMonth").css("display", "none");
        $(".errorBotMonth").css("display", "none");

      }
    }

    if (yearIn == null) {
      $("#year").addClass("error");
      $(".reqFieldYear").css("display", "initial");
      $(".errorBotYear").css("display", "none");
    } else if (yearIn < 1900) {
      alert("Must be at least 1900");
    } else {
      if (!isValidYear || yearIn == "nonNumeric") {
        $("#year").addClass("error");
        $("#yearOut").text("--");
        $(".errorBotYear").css("display", "initial");
        $(".reqFieldYear").css("display", "none");
      } else {
        $("#yearOut").text(yearOut.toString().padStart(2, "0"));
        $(".reqFieldYear").css("display", "none");
        $(".errorBotYear").css("display", "none");
      }
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