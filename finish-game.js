function finishGame() {
  if (
    trueSchalter101 == trueSchalter0 ||
    falseSchalter101 == falseSchalter0 ||
    falseSchalter102 == falseSchalter0 ||
    falseSchalter103 == falseSchalter0
  ) {
    if (score == 10) {
      document.getElementById("finish-out").innerHTML =
        "Glückwunsch, du hast alle Fragen richtig beantwortet und somit das Spiel gewonnen. Das Spiel ist zu ende.";
    } else {
      document.getElementById("finish-out").innerHTML =
        "Das Spiel ist zu Ende, leider hast du nicht alle Fargen richtig beantwortet.";
    }
    if (
      trueSchalter101 == trueSchalter0 ||
      falseSchalter101 == falseSchalter0 ||
      falseSchalter102 == falseSchalter0 ||
      falseSchalter103 == falseSchalter0
    ) {
      document.getElementsByTagName("button")[0].disabled = true;
      document.getElementsByTagName("button")[1].disabled = true;
      document.getElementsByTagName("button")[2].disabled = true;
      document.getElementsByTagName("button")[3].disabled = true;
      document.getElementsByTagName("button")[4].disabled = true;
      document.getElementsByTagName("button")[5].disabled = true;
      document.getElementsByTagName("button")[6].disabled = true;
      document.getElementsByTagName("button")[7].disabled = true;
      document.getElementsByTagName("button")[8].disabled = true;
      document.getElementsByTagName("button")[9].disabled = true;
    }
  }
}
