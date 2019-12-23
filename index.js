function tierCalc() {
  const inputNum = document.getElementById("myText").value;
  const tierNum = 100 * 1.17 ** inputNum - 100;
  const resault =
    "+" + inputNum + " Tiers = " + Math.round(tierNum) + "% More hp";

    if (inputNum < 1) {
      return (document.getElementById("resualt").innerHTML = "Number can't be negative or 0");
    } else {

      return (document.getElementById("resualt").innerHTML = resault);
    }
}

function pluss() {
  let inputNum = document.getElementById("myText").value++;
  inputNum++;
  const tierNum = 100 * 1.17 ** inputNum - 100;
  const resault =
    "+" + inputNum + " Tiers = " + Math.round(tierNum) + "% More hp";

  

    if (inputNum < 1) {
      return (document.getElementById("resualt").innerHTML = "Number can't be negative or 0");
    } else {

      return (document.getElementById("resualt").innerHTML = resault);
    }
}

const minus = () => {
  let inputNum = document.getElementById("myText").value--;
  inputNum--;
  const tierNum = 100 * 1.17 ** inputNum - 100;
  const resault =
    "+" + inputNum + " Tiers = " + Math.round(tierNum) + "% More hp";

    if (inputNum < 1) {
      return (document.getElementById("resualt").innerHTML = "Number can't be negative or 0");
    } else {

      return (document.getElementById("resualt").innerHTML = resault);
    }

};
