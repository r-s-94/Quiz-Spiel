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
  }
}
