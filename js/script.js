function calculatin(){
  let priceCny = document.querySelector(".priceCny").value;
  let weight = document.querySelector(".weight").value;
  let finalPrice = +priceCny * 1.07 + +weight * 36;
  console.log(finalPrice);
  document.getElementById('mainCalculatorFinalPriceByn').innerHTML = Math.floor((finalPrice * 0.448) * 1000) / 1000;
  document.getElementById('mainCalculatorFinalPriceCny').innerHTML =  Math.floor((finalPrice) * 1000) / 1000;
  document.getElementById('mainCalculatorFinalPriceDlr').innerHTML =  Math.floor((finalPrice * 0.137) * 1000) / 1000;
}


