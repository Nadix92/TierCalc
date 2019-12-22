function tierCalc() {
  var inputNum = document.getElementById("myText").value;
  var tierNum = 100 * 1.17 ** inputNum - 100;
  var resault = inputNum + " Tiers = " + Math.round(tierNum) + "% More hp";

  if (isNaN(inputNum)) {
    return (document.getElementById("demo").innerHTML =
      "Insert a number Idiot!!");
  } else {
    return (document.getElementById("demo").innerHTML = resault);
  }
}
