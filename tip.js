const tipcalcy = () => {
  let amount = document.getElementById("Bill_amount").Value;

  let percentage = document.getElementById("tip_percentage").value;

  let tip = amount * (percentage / 100);
  alert(tip);

  let total = tip + Number(amount);
  alert(total);

  document.getElementById("tip_total").value = tip;

  document.getElementById("total_billed").value = total;
};
