let range = document.querySelector(".slider");
let month = document.querySelector(".price");
let view = document.querySelector(".pageview");
const toggle = document.getElementById("toggle");


//the toggle button
const toggleClick = function () {
   toggle.classList.toggle("active");
};

//range slider color toggler


// const entry = (val) => {
//    if (val === 1) {
//       view.innerHTML = '10k'
//    }
// };

// range.oninput = function () {
//    month.innerHTML = this.value;
// };


// the range slider
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

['click', 'input'].forEach(e => {
   range.addEventListener(e, rangeValue);
})

// range.addEventListener("input", rangeValue);
toggle.addEventListener("click", toggleClick);

// const entry = []
