let score = 0;

let input1;
let input2;
let input3;
let input4;
let input5;
let input6;
let input7;
let input8;
let input9;
let input10;

function check() {
  input1 = document.getElementById("question1");
  trueSchalter01;
  falseSchalter01;
  falseSchalter02;
  falseSchalter03;

  switch (input1.value) {
    case "1":
      falseSchalter01 = false;
      falseAnswer01();

      break;

    case "2":
      trueSchalter01 = true;
      checkAnswer1();

      break;

    case "3":
      falseSchalter02 = false;
      falseAnswer02();

      break;

    case "4":
      falseSchalter03 = false;
      falseAnswer03();

      break;

    default:
      break;
  }
}

function check2() {
  input2 = document.getElementById("question2");
  trueSchalter21;
  falseSchalter21;
  falseSchalter22;

  switch (input2.value) {
    case "1":
      falseSchalter21 = false;
      falseAnswer21();

      break;

    case "2":
      falseSchalter22 = false;
      falseAnswer22();

      break;

    case "3":
      trueSchalter21 = true;
      checkAnswer2();

      break;

    case "4":
      falseSchalter23 = false;
      falseAnswer23();

      break;

    default:
      break;
  }
}

function check3() {
  input3 = document.getElementById("question3");
  trueSchalter31;
  falseSchalter31;
  falseSchalter32;
  falseSchalter33;

  switch (input3.value) {
    case "1":
      trueSchalter31 = true;
      checkAnswer3();

      break;

    case "2":
      falseSchalter31 = false;
      falseAnswer31();

      break;

    case "3":
      falseSchalter32 = false;
      falseAnswer32();

      break;

    case "4":
      falseSchalter33 = false;
      falseAnswer33();

      break;

    default:
      break;
  }
}

function check4() {
  input4 = document.getElementById("question4");
  trueSchalter41;
  falseSchalter41;
  falseSchalter42;
  falseSchalter43;

  switch (input4.value) {
    case "1":
      falseSchalter41 = false;
      falseAnswer41();

      break;

    case "2":
      falseSchalter42 = false;
      falseAnswer42();

      break;

    case "3":
      falseSchalter43 = false;
      falseAnswer43();

      break;

    case "4":
      trueSchalter41 = true;
      checkAnswer4();

      break;

    default:
      break;
  }
}

function check5() {
  input5 = document.getElementById("question5");
  trueSchalter51;
  falseSchalter51;
  falseSchalter52;
  falseSchalter53;

  switch (input5.value) {
    case "1":
      falseSchalter51 = false;
      falseAnswer51();

      break;

    case "2":
      falseSchalter52 = false;
      falseAnswer52();

      break;

    case "3":
      trueSchalter51 = true;
      checkAnswer5();

      break;

    case "4":
      falseSchalter53 = false;
      falseAnswer53();

      break;

    default:
      break;
  }
}

function check6() {
  input6 = document.getElementById("question6");
  trueSchalter61;
  falseSchalter61;
  falseSchalter62;
  falseSchalter63;

  switch (input6.value) {
    case "1":
      falseSchalter61 = false;
      falseAnswer61();

      break;

    case "2":
      falseSchalter62 = false;
      falseAnswer62();

      break;

    case "3":
      trueSchalter61 = true;
      checkAnswer6();

      break;

    case "4":
      falseSchalter63 = false;
      falseAnswer63();

      break;

    default:
      break;
  }
}

function check7() {
  input7 = document.getElementById("question7");
  trueSchalter71;
  falseSchalter71;
  falseSchalter72;
  falseSchalter73;

  switch (input7.value) {
    case "1":
      falseSchalter71 = false;
      falseAnswer71();

      break;

    case "2":
      trueSchalter71 = true;
      checkAnswer7();

      break;

    case "3":
      falseSchalter72 = false;
      falseAnswer72();

      break;

    case "4":
      falseSchalter73 = false;
      falseAnswer73();

      break;

    default:
      break;
  }
}

function check8() {
  input8 = document.getElementById("question8");
  trueSchalter81;
  falseSchalter81;
  falseSchalter82;
  falseSchalter83;

  switch (input8.value) {
    case "1":
      falseSchalter81 = false;
      falseAnswer81();

      break;

    case "2":
      falseSchalter82 = false;
      falseAnswer82();

      break;

    case "3":
      trueSchalter81 = true;
      checkAnswer8();

      break;

    case "4":
      falseSchalter83 = false;
      falseAnswer83();

      break;

    default:
      break;
  }
}

function check9() {
  input9 = document.getElementById("question9");
  trueSchalter91;
  falseSchalter91;
  falseSchalter92;
  falseSchalter93;

  switch (input9.value) {
    case "1":
      falseSchalter91 = false;
      falseAnswer91();

      break;

    case "2":
      falseSchalter92 = false;
      falseAnswer92();

      break;

    case "3":
      falseSchalter93 = false;
      falseAnswer93();

      break;

    case "4":
      trueSchalter91 = true;
      checkAnswer9();

      break;

    default:
      break;
  }
}

function check10() {
  input10 = document.getElementById("question10");
  trueSchalter101;
  falseSchalter101;
  falseSchalter102;
  falseSchalter103;

  switch (input10.value) {
    case "1":
      falseSchalter101 = false;
      falseAnswer101();

      break;

    case "2":
      trueSchalter101 = true;
      checkAnswer10();

      break;

    case "3":
      falseSchalter102 = false;
      falseAnswer102();

      break;

    case "4":
      falseSchalter103 = false;
      falseAnswer103();

      break;

    default:
      break;
  }
}
