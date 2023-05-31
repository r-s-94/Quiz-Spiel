//  1 Bereich

function trueAnswer() {
  document.getElementById("out").innerHTML = "Die Antwort ist richtig.";
  document.getElementsByTagName("b")[0].style.backgroundColor = "white";
  document.getElementsByTagName("b")[1].style.backgroundColor = "green";
  document.getElementsByTagName("b")[2].style.backgroundColor = "white";
  document.getElementsByTagName("b")[3].style.backgroundColor = "white";
  document.getElementsByTagName("input")[0].value = "";
}

function falseAnswer01() {
  document.getElementById("out").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[0].style.backgroundColor = "red";
  document.getElementsByTagName("b")[1].style.backgroundColor = "white";
  document.getElementsByTagName("b")[2].style.backgroundColor = "white";
  document.getElementsByTagName("b")[3].style.backgroundColor = "white";
  document.getElementsByTagName("input")[0].value = "";
}

function falseAnswer02() {
  document.getElementById("out").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[0].style.backgroundColor = "white";
  document.getElementsByTagName("b")[1].style.backgroundColor = "white";
  document.getElementsByTagName("b")[2].style.backgroundColor = "red";
  document.getElementsByTagName("b")[3].style.backgroundColor = "white";
  document.getElementsByTagName("input")[0].value = "";
}

function falseAnswer03() {
  document.getElementById("out").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[0].style.backgroundColor = "white";
  document.getElementsByTagName("b")[1].style.backgroundColor = "white";
  document.getElementsByTagName("b")[2].style.backgroundColor = "white";
  document.getElementsByTagName("b")[3].style.backgroundColor = "red";
  document.getElementsByTagName("input")[0].value = "";
}

function alternativeAnswer() {
  document.getElementById("out").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[0].style.backgroundColor = "white";
  document.getElementsByTagName("b")[1].style.backgroundColor = "green";
  document.getElementsByTagName("b")[2].style.backgroundColor = "white";
  document.getElementsByTagName("b")[3].style.backgroundColor = "white";
}

//  2 Bereich

function trueAnswer2() {
  document.getElementById("out2").innerHTML = "Die Antwort ist richtig.";
  document.getElementsByTagName("b")[4].style.backgroundColor = "white";
  document.getElementsByTagName("b")[5].style.backgroundColor = "white";
  document.getElementsByTagName("b")[6].style.backgroundColor = "green";
  document.getElementsByTagName("b")[7].style.backgroundColor = "white";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("input")[1].value = "";
}

function falseAnswer21() {
  document.getElementById("out2").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[4].style.backgroundColor = "red";
  document.getElementsByTagName("b")[5].style.backgroundColor = "white";
  document.getElementsByTagName("b")[6].style.backgroundColor = "white";
  document.getElementsByTagName("b")[7].style.backgroundColor = "white";
  document.getElementsByTagName("input")[1].value = "";
}

function falseAnswer22() {
  document.getElementById("out2").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[4].style.backgroundColor = "white";
  document.getElementsByTagName("b")[5].style.backgroundColor = "red";
  document.getElementsByTagName("b")[6].style.backgroundColor = "white";
  document.getElementsByTagName("b")[7].style.backgroundColor = "white";
  document.getElementsByTagName("input")[1].value = "";
}

function falseAnswer23() {
  document.getElementById("out2").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[4].style.backgroundColor = "white";
  document.getElementsByTagName("b")[5].style.backgroundColor = "white";
  document.getElementsByTagName("b")[6].style.backgroundColor = "white";
  document.getElementsByTagName("b")[7].style.backgroundColor = "red";
  document.getElementsByTagName("input")[1].value = "";
}

function alternativeAnswer2() {
  document.getElementById("out2").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[4].style.backgroundColor = "white";
  document.getElementsByTagName("b")[5].style.backgroundColor = "white";
  document.getElementsByTagName("b")[6].style.backgroundColor = "green";
  document.getElementsByTagName("b")[7].style.backgroundColor = "white";
  document.getElementsByTagName("input")[1].value = "";
}

//  3 Bereich

function trueAnswer3() {
  document.getElementById("out3").innerHTML = "Die Anwort ist richtig.";
  document.getElementsByTagName("b")[8].style.backgroundColor = "green";
  document.getElementsByTagName("b")[9].style.backgroundColor = "white";
  document.getElementsByTagName("b")[10].style.backgroundColor = "white";
  document.getElementsByTagName("b")[11].style.backgroundColor = "white";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("input")[2].value = "";
}

function falseAnswer31() {
  document.getElementById("out3").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[8].style.backgroundColor = "white";
  document.getElementsByTagName("b")[9].style.backgroundColor = "red";
  document.getElementsByTagName("b")[10].style.backgroundColor = "white";
  document.getElementsByTagName("b")[11].style.backgroundColor = "white";
  document.getElementsByTagName("input")[2].value = "";
}

function falseAnswer32() {
  document.getElementById("out3").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[8].style.backgroundColor = "white";
  document.getElementsByTagName("b")[9].style.backgroundColor = "white";
  document.getElementsByTagName("b")[10].style.backgroundColor = "red";
  document.getElementsByTagName("b")[11].style.backgroundColor = "white";
  document.getElementsByTagName("input")[2].value = "";
}

function falseAnswer33() {
  document.getElementById("out3").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[8].style.backgroundColor = "white";
  document.getElementsByTagName("b")[9].style.backgroundColor = "white";
  document.getElementsByTagName("b")[10].style.backgroundColor = "white";
  document.getElementsByTagName("b")[11].style.backgroundColor = "red";
  document.getElementsByTagName("input")[2].value = "";
}

function alternativeAnswer3() {
  document.getElementById("out3").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[8].style.backgroundColor = "green";
  document.getElementsByTagName("b")[9].style.backgroundColor = "white";
  document.getElementsByTagName("b")[10].style.backgroundColor = "white";
  document.getElementsByTagName("b")[11].style.backgroundColor = "white";
  document.getElementsByTagName("input")[2].value = "";
}

//  4 Bereich

function trueAnswer4() {
  document.getElementById("out4").innerHTML = "Die Antwort ist richtig.";
  document.getElementsByTagName("b")[12].style.backgroundColor = "white";
  document.getElementsByTagName("b")[13].style.backgroundColor = "white";
  document.getElementsByTagName("b")[14].style.backgroundColor = "white";
  document.getElementsByTagName("b")[15].style.backgroundColor = "green";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("input")[3].value = "";
}

function falseAnswer41() {
  document.getElementById("out4").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[12].style.backgroundColor = "red";
  document.getElementsByTagName("b")[13].style.backgroundColor = "white";
  document.getElementsByTagName("b")[14].style.backgroundColor = "white";
  document.getElementsByTagName("b")[15].style.backgroundColor = "white";
  document.getElementsByTagName("input")[3].value = "";
}

function falseAnswer42() {
  document.getElementById("out4").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[12].style.backgroundColor = "white";
  document.getElementsByTagName("b")[13].style.backgroundColor = "red";
  document.getElementsByTagName("b")[14].style.backgroundColor = "white";
  document.getElementsByTagName("b")[15].style.backgroundColor = "white";
  document.getElementsByTagName("input")[3].value = "";
}

function falseAnswer43() {
  document.getElementById("out4").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[12].style.backgroundColor = "white";
  document.getElementsByTagName("b")[13].style.backgroundColor = "white";
  document.getElementsByTagName("b")[14].style.backgroundColor = "red";
  document.getElementsByTagName("b")[15].style.backgroundColor = "white";
  document.getElementsByTagName("input")[3].value = "";
}

function alternativeAnswer4() {
  document.getElementById("out4").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[12].style.backgroundColor = "white";
  document.getElementsByTagName("b")[13].style.backgroundColor = "white";
  document.getElementsByTagName("b")[14].style.backgroundColor = "white";
  document.getElementsByTagName("b")[15].style.backgroundColor = "green";
  document.getElementsByTagName("input")[3].value = "";
}

//  5 Bereich

function trueAnswer5() {
  document.getElementById("out5").innerHTML = "Die Antwort ist richtig.";
  document.getElementsByTagName("b")[16].style.backgroundColor = "white";
  document.getElementsByTagName("b")[17].style.backgroundColor = "white";
  document.getElementsByTagName("b")[18].style.backgroundColor = "green";
  document.getElementsByTagName("b")[19].style.backgroundColor = "white";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("input")[4].value = "";
}

function falseAnswer51() {
  document.getElementById("out5").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[16].style.backgroundColor = "red";
  document.getElementsByTagName("b")[17].style.backgroundColor = "white";
  document.getElementsByTagName("b")[18].style.backgroundColor = "white";
  document.getElementsByTagName("b")[19].style.backgroundColor = "white";
  document.getElementsByTagName("input")[4].value = "";
}

function falseAnswer52() {
  document.getElementById("out5").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[16].style.backgroundColor = "white";
  document.getElementsByTagName("b")[17].style.backgroundColor = "red";
  document.getElementsByTagName("b")[18].style.backgroundColor = "white";
  document.getElementsByTagName("b")[19].style.backgroundColor = "white";
  document.getElementsByTagName("input")[4].value = "";
}

function falseAnswer53() {
  document.getElementById("out5").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[16].style.backgroundColor = "white";
  document.getElementsByTagName("b")[17].style.backgroundColor = "white";
  document.getElementsByTagName("b")[18].style.backgroundColor = "white";
  document.getElementsByTagName("b")[19].style.backgroundColor = "red";
  document.getElementsByTagName("input")[4].value = "";
}

function alternativeAnswer5() {
  document.getElementById("out5").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[16].style.backgroundColor = "white";
  document.getElementsByTagName("b")[17].style.backgroundColor = "white";
  document.getElementsByTagName("b")[18].style.backgroundColor = "green";
  document.getElementsByTagName("b")[19].style.backgroundColor = "white";
  document.getElementsByTagName("input")[4].value = "";
}

//  6 Bereich

function trueAnswer6() {
  document.getElementById("out6").innerHTML = "Die Antwort ist richtig.";
  document.getElementsByTagName("b")[20].style.backgroundColor = "white";
  document.getElementsByTagName("b")[21].style.backgroundColor = "white";
  document.getElementsByTagName("b")[22].style.backgroundColor = "green";
  document.getElementsByTagName("b")[23].style.backgroundColor = "white";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("input")[5].value = "";
}

function falseAnswer61() {
  document.getElementById("out6").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[20].style.backgroundColor = "red";
  document.getElementsByTagName("b")[21].style.backgroundColor = "white";
  document.getElementsByTagName("b")[22].style.backgroundColor = "white";
  document.getElementsByTagName("b")[23].style.backgroundColor = "white";
  document.getElementsByTagName("input")[5].value = "";
}

function falseAnswer62() {
  document.getElementById("out6").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[20].style.backgroundColor = "white";
  document.getElementsByTagName("b")[21].style.backgroundColor = "red";
  document.getElementsByTagName("b")[22].style.backgroundColor = "white";
  document.getElementsByTagName("b")[23].style.backgroundColor = "white";
  document.getElementsByTagName("input")[5].value = "";
}

function falseAnswer63() {
  document.getElementById("out6").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[20].style.backgroundColor = "white";
  document.getElementsByTagName("b")[21].style.backgroundColor = "white";
  document.getElementsByTagName("b")[22].style.backgroundColor = "white";
  document.getElementsByTagName("b")[23].style.backgroundColor = "red";
  document.getElementsByTagName("input")[5].value = "";
}

function alternativeAnswer6() {
  document.getElementById("out6").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[20].style.backgroundColor = "white";
  document.getElementsByTagName("b")[21].style.backgroundColor = "white";
  document.getElementsByTagName("b")[22].style.backgroundColor = "green";
  document.getElementsByTagName("b")[23].style.backgroundColor = "white";
  document.getElementsByTagName("input")[5].value = "";
}

//  7 Bereich

function trueAnswer7() {
  document.getElementById("out7").innerHTML = "Die Antwort ist richtig.";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("b")[24].style.backgroundColor = "white";
  document.getElementsByTagName("b")[25].style.backgroundColor = "green";
  document.getElementsByTagName("b")[26].style.backgroundColor = "white";
  document.getElementsByTagName("b")[27].style.backgroundColor = "white";
  document.getElementsByTagName("input")[6].value = "";
}

function falseAnswer71() {
  document.getElementById("out7").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[24].style.backgroundColor = "red";
  document.getElementsByTagName("b")[25].style.backgroundColor = "white";
  document.getElementsByTagName("b")[26].style.backgroundColor = "white";
  document.getElementsByTagName("b")[27].style.backgroundColor = "white";
  document.getElementsByTagName("input")[6].value = "";
}

function falseAnswer72() {
  document.getElementById("out7").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[24].style.backgroundColor = "white";
  document.getElementsByTagName("b")[25].style.backgroundColor = "white";
  document.getElementsByTagName("b")[26].style.backgroundColor = "red";
  document.getElementsByTagName("b")[27].style.backgroundColor = "white";
  document.getElementsByTagName("input")[6].value = "";
}

function falseAnswer73() {
  document.getElementById("out7").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[24].style.backgroundColor = "white";
  document.getElementsByTagName("b")[25].style.backgroundColor = "white";
  document.getElementsByTagName("b")[26].style.backgroundColor = "white";
  document.getElementsByTagName("b")[27].style.backgroundColor = "red";
  document.getElementsByTagName("input")[6].value = "";
}

function alternativeAnswer7() {
  document.getElementById("out7").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[24].style.backgroundColor = "white";
  document.getElementsByTagName("b")[25].style.backgroundColor = "green";
  document.getElementsByTagName("b")[26].style.backgroundColor = "white";
  document.getElementsByTagName("b")[27].style.backgroundColor = "white";
  document.getElementsByTagName("input")[6].value = "";
}

//  8 Bereich

function trueAnswer8() {
  document.getElementById("out8").innerHTML = "Die Antwort ist richtig.";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("b")[28].style.backgroundColor = "white";
  document.getElementsByTagName("b")[29].style.backgroundColor = "white";
  document.getElementsByTagName("b")[30].style.backgroundColor = "green";
  document.getElementsByTagName("b")[31].style.backgroundColor = "white";
  document.getElementsByTagName("input")[7].value = "";
}

function falseAnswer81() {
  document.getElementById("out8").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[28].style.backgroundColor = "red";
  document.getElementsByTagName("b")[29].style.backgroundColor = "white";
  document.getElementsByTagName("b")[30].style.backgroundColor = "white";
  document.getElementsByTagName("b")[31].style.backgroundColor = "white";
  document.getElementsByTagName("input")[7].value = "";
}

function falseAnswer82() {
  document.getElementById("out8").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[28].style.backgroundColor = "white";
  document.getElementsByTagName("b")[29].style.backgroundColor = "red";
  document.getElementsByTagName("b")[30].style.backgroundColor = "white";
  document.getElementsByTagName("b")[31].style.backgroundColor = "white";
  document.getElementsByTagName("input")[7].value = "";
}

function falseAnswer83() {
  document.getElementById("out8").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[28].style.backgroundColor = "white";
  document.getElementsByTagName("b")[29].style.backgroundColor = "white";
  document.getElementsByTagName("b")[30].style.backgroundColor = "white";
  document.getElementsByTagName("b")[31].style.backgroundColor = "red";
  document.getElementsByTagName("input")[7].value = "";
}

function alternativeAnswer8() {
  document.getElementById("out8").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[28].style.backgroundColor = "white";
  document.getElementsByTagName("b")[29].style.backgroundColor = "white";
  document.getElementsByTagName("b")[30].style.backgroundColor = "green";
  document.getElementsByTagName("b")[31].style.backgroundColor = "white";
  document.getElementsByTagName("input")[7].value = "";
}

//  9 Bereich

function trueAnswer9() {
  document.getElementById("out9").innerHTML = "Die Antwort ist richtig.";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("b")[32].style.backgroundColor = "white";
  document.getElementsByTagName("b")[33].style.backgroundColor = "white";
  document.getElementsByTagName("b")[34].style.backgroundColor = "white";
  document.getElementsByTagName("b")[35].style.backgroundColor = "green";
  document.getElementsByTagName("input")[8].value = "";
}

function falseAnswer91() {
  document.getElementById("out9").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[32].style.backgroundColor = "red";
  document.getElementsByTagName("b")[33].style.backgroundColor = "white";
  document.getElementsByTagName("b")[34].style.backgroundColor = "white";
  document.getElementsByTagName("b")[35].style.backgroundColor = "white";
  document.getElementsByTagName("input")[8].value = "";
}

function falseAnswer92() {
  document.getElementById("out9").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[32].style.backgroundColor = "white";
  document.getElementsByTagName("b")[33].style.backgroundColor = "red";
  document.getElementsByTagName("b")[34].style.backgroundColor = "white";
  document.getElementsByTagName("b")[35].style.backgroundColor = "white";
  document.getElementsByTagName("input")[8].value = "";
}

function falseAnswer93() {
  document.getElementById("out9").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[32].style.backgroundColor = "white";
  document.getElementsByTagName("b")[33].style.backgroundColor = "white";
  document.getElementsByTagName("b")[34].style.backgroundColor = "red";
  document.getElementsByTagName("b")[35].style.backgroundColor = "white";
  document.getElementsByTagName("input")[8].value = "";
}

function alternativeAnswer9() {
  document.getElementById("out9").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[32].style.backgroundColor = "white";
  document.getElementsByTagName("b")[33].style.backgroundColor = "white";
  document.getElementsByTagName("b")[34].style.backgroundColor = "white";
  document.getElementsByTagName("b")[35].style.backgroundColor = "green";
  document.getElementsByTagName("input")[8].value = "";
}

//  10 Berich

function trueAnswer10() {
  trueSchalter101;
  document.getElementById("out10").innerHTML = "Die Antwort ist richtig.";
  document.getElementById("scoreOut").innerHTML = score;
  document.getElementsByTagName("b")[36].style.backgroundColor = "white";
  document.getElementsByTagName("b")[37].style.backgroundColor = "green";
  document.getElementsByTagName("b")[38].style.backgroundColor = "white";
  document.getElementsByTagName("b")[39].style.backgroundColor = "white";
  document.getElementsByTagName("input")[9].value = "";
  trueSchalter101 = true;
  finishGame();
}

function falseAnswer101() {
  falseSchalter101;
  document.getElementById("out10").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[36].style.backgroundColor = "red";
  document.getElementsByTagName("b")[37].style.backgroundColor = "white";
  document.getElementsByTagName("b")[38].style.backgroundColor = "white";
  document.getElementsByTagName("b")[39].style.backgroundColor = "white";
  document.getElementsByTagName("input")[9].value = "";
  falseSchalter101 = false;
  finishGame();
}

function falseAnswer102() {
  falseSchalter102;
  document.getElementById("out10").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[36].style.backgroundColor = "white";
  document.getElementsByTagName("b")[37].style.backgroundColor = "white";
  document.getElementsByTagName("b")[38].style.backgroundColor = "red";
  document.getElementsByTagName("b")[39].style.backgroundColor = "white";
  document.getElementsByTagName("input")[9].value = "";
  falseSchalter102 = false;
  finishGame();
}

function falseAnswer103() {
  falseSchalter103;
  document.getElementById("out10").innerHTML = "Die Anwort ist leider falsch.";
  document.getElementsByTagName("b")[36].style.backgroundColor = "white";
  document.getElementsByTagName("b")[37].style.backgroundColor = "white";
  document.getElementsByTagName("b")[38].style.backgroundColor = "white";
  document.getElementsByTagName("b")[39].style.backgroundColor = "red";
  document.getElementsByTagName("input")[9].value = "";
  falseSchalter103 = false;
  finishGame();
}

function alternativeAnswer10() {
  document.getElementById("out10").innerHTML =
    "Die Antwort ist jetzt richtig." +
    "<br>" +
    "Du hast leider bereits eine falsche Antwort eingegeben, es gibt keinen Punkt.";
  document.getElementsByTagName("b")[36].style.backgroundColor = "white";
  document.getElementsByTagName("b")[37].style.backgroundColor = "green";
  document.getElementsByTagName("b")[38].style.backgroundColor = "white";
  document.getElementsByTagName("b")[39].style.backgroundColor = "white";
  document.getElementsByTagName("input")[9].value = "";
}
