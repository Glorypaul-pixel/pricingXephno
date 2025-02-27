document.addEventListener("DOMContentLoaded", function () {
  const toggleSwitch = document.getElementById("togglePricing");
  const prices = {
    free: "$0.00",
    creatorMonthly: "$35",
    creatorAnnual: "$28",
    academyMonthly: "$100",
    academyAnnual: "$80",
    custom: "Custom",
  };

  toggleSwitch.addEventListener("change", function () {
    document.getElementById("freePrice").textContent = prices.free;
    document.getElementById("creatorPrice").textContent = this.checked
      ? prices.creatorAnnual
      : prices.creatorMonthly;
    document.getElementById("academyPrice").textContent = this.checked
      ? prices.academyAnnual
      : prices.academyMonthly;
    document.getElementById("customPrice").textContent = prices.custom;
    document.getElementById("creatorSub").textContent = this.checked
      ? sub.creatorSubAnnual
      : sub.creatorSubMonthly;
    document.getElementById("academySub").textContent = this.checked
      ? sub.academySubAnnual
      : sub.academySubMonthly;
  });
});
