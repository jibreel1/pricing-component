let range = document.querySelector(".slider");
let month = document.querySelector(".price");
let view = document.querySelector(".pageview");

let rangeMobile = document.getElementById("range");
let monthMobile = document.getElementById("price");
let viewMobile = document.getElementById("pageview");

const toggle = document.getElementById("toggle");

//the toggle button
const toggleClick = function () {
   toggle.classList.toggle("active");
   rangeValue();
   rangeValueMobile();
};

// the range slider for desktop
const rangeValue = function () {
   let val = range.value;

   if (toggle.classList.contains("active")) {
      // console.log("discount");

      if (val == 1) {
         view.innerHTML = "10k";
         month.innerHTML = "$2.00";
      } else if (val == 2) {
         view.innerHTML = "50k";
         month.innerHTML = "$3.00";
      } else if (val == 3) {
         view.innerHTML = "100k";
         month.innerHTML = "$4.00";
      } else if (val == 4) {
         view.innerHTML = "500k";
         month.innerHTML = "$6.00";
      } else if (val == 5) {
         view.innerHTML = "1M";
         month.innerHTML = "$9.00";
      }
   } else {
      // console.log("no discount");

      if (val == 1) {
         view.innerHTML = "10k";
         month.innerHTML = "$8.00";
      } else if (val == 2) {
         view.innerHTML = "50k";
         month.innerHTML = "$12.00";
      } else if (val == 3) {
         view.innerHTML = "100k";
         month.innerHTML = "$16.00";
      } else if (val == 4) {
         view.innerHTML = "500k";
         month.innerHTML = "$24.00";
      } else if (val == 5) {
         view.innerHTML = "1M";
         month.innerHTML = "$36.00";
      }
   }
};

// the range slider for mobile
const rangeValueMobile = function () {
   let valM = rangeMobile.value;

   if (toggle.classList.contains("active")) {
      // console.log("discount");

      if (valM == 1) {
         viewMobile.innerHTML = "10k";
         monthMobile.innerHTML = "$2.00";
      } else if (valM == 2) {
         viewMobile.innerHTML = "50k";
         monthMobile.innerHTML = "$3.00";
      } else if (valM == 3) {
         viewMobile.innerHTML = "100k";
         monthMobile.innerHTML = "$4.00";
      } else if (valM == 4) {
         viewMobile.innerHTML = "500k";
         monthMobile.innerHTML = "$6.00";
      } else if (valM == 5) {
         viewMobile.innerHTML = "1M";
         monthMobile.innerHTML = "$9.00";
      }
   } else {
      // console.log("no discount");

      if (valM == 1) {
         viewMobile.innerHTML = "10k";
         monthMobile.innerHTML = "$8.00";
      } else if (valM == 2) {
         viewMobile.innerHTML = "50k";
         monthMobile.innerHTML = "$12.00";
      } else if (valM == 3) {
         viewMobile.innerHTML = "100k";
         monthMobile.innerHTML = "$16.00";
      } else if (valM == 4) {
         viewMobile.innerHTML = "500k";
         monthMobile.innerHTML = "$24.00";
      } else if (valM == 5) {
         viewMobile.innerHTML = "1M";
         monthMobile.innerHTML = "$36.00";
      }
   }
};

range.addEventListener("input", rangeValue);
rangeMobile.addEventListener("input", rangeValueMobile);
toggle.addEventListener("click", toggleClick);
