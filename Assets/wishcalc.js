var daysUntilEnd = parseInt(0);

window.onload = function currentDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("startDate").value = today;
  document.getElementById("endDate").value = today;
}

  function calculate() {
  var totalWishes = parseInt("");
  var primos = parseInt(document.getElementById("primos").value);
  var fates = parseInt(document.getElementById("fates").value);
  var welkin = parseInt(document.getElementById("welkin").value);
  var gnostic = parseInt(document.getElementById("gnostic").value);
  var genesis = parseInt(document.getElementById("genesis").value);
  var daysUntilEnd = parseInt("");

  var primosLeft = parseInt("0");

  var pities = parseInt("0");
  var wishType = document.getElementById("wishType").value;

  calculateDateDiff();
  if (welkin > daysUntilEnd) {
    welkin = daysUntilEnd;
  }

  primos += (daysUntilEnd * 60) + (welkin * 90) + (gnostic * 680) + genesis;
  fates += (gnostic * 4);

  primosLeft = (primos % 160);
  totalWishes = Math.floor(primos / 160) + fates;

  if (wishType == "character") {
    pities = totalWishes / 90;
  } else if (wishType == "weapon") {
    pities = totalWishes / 80;
  }

  document.getElementById("displayWishes").innerHTML = "Total Wishes: " + totalWishes;
  document.getElementById("displayRemPrimos").innerHTML = "Remaining Primogems: " + primosLeft;
  document.getElementById("displayPity").innerHTML = "Number of hard pity: " + pities;
}

function displayDaysLeft() {
  calculateDateDiff();
  document.getElementById("displayDaysUntilEnd").innerHTML = "Days before banner ends: " + daysUntilEnd;
}

function calculateDateDiff() {
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  if (!endDate) {
    daysUntilEnd = parseInt(0);
  } else {
    var diffInMs = new Date(endDate) - new Date(startDate);
    daysUntilEnd = parseInt(diffInMs / (1000 * 60 * 60 * 24));
  }
}
