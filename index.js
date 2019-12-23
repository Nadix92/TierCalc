function tierCalc() {
  const inputNum = document.getElementById("myText").value;
  const tierNum = 100 * 1.17 ** inputNum - 100;
  const timesHP = 1.17 ** inputNum;

  const resault =
    "+" + inputNum + " Tiers = " + Math.round(tierNum) + "% More HP";

  if (inputNum < 1) {
    return (document.getElementById("resualt").innerHTML =
      "Number can't be negative or 0");
  } else {
    return (document.getElementById("resualt").innerText =
      resault + "\n AKA " + timesHP.toFixed(2) + " Times the HP");
  }
}

function pluss() {
  let inputNum = document.getElementById("myText").value++;
  inputNum++;
  const tierNum = 100 * 1.17 ** inputNum - 100;
  const timesHP = 1.17 ** inputNum;

  const resault =
    "+" + inputNum + " Tiers = " + Math.round(tierNum) + "% More HP";

  if (inputNum < 1) {
    return (document.getElementById("resualt").innerHTML =
      "Number can't be negative or 0");
  } else {
    return (document.getElementById("resualt").innerText =
      resault + "\n AKA " + timesHP.toFixed(2) + " Times the HP");
  }
}

const minus = () => {
  let inputNum = document.getElementById("myText").value--;
  inputNum--;
  const tierNum = 100 * 1.17 ** inputNum - 100;
  const timesHP = 1.17 ** inputNum;

  const resault =
    "+" + inputNum + " Tiers = " + Math.round(tierNum) + "% More HP";

  if (inputNum < 1) {
    return (document.getElementById("resualt").innerHTML =
      "Number can't be negative or 0");
  } else {
    return (document.getElementById("resualt").innerText =
      resault + "\n AKA " + timesHP.toFixed(2) + " Times the HP");
  }
};
