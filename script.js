const calculate = document.getElementById("calculate");
calculate.addEventListener("click", function () {
  const value = parseFloat(document.getElementById("value").value);
  const months = parseFloat(document.getElementById("months").value);
  const fee = parseFloat(document.getElementById("fee").value) / 100;
  const time = parseFloat(document.getElementById("time").value);
  const total =
    value * (1 + fee) ** time + months * (((1 + fee) ** time - 1) / fee);

  document.getElementById("total").innerHTML = `R$ ${total.toFixed(2)}`;
});
