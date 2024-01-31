const notfis = document.querySelectorAll(".notfi__content");
const notfiCounter = document.querySelector(".notfi__counter");
const btnMarkAll = document.querySelector("#btn-mark-all");
const btnLocations = document.querySelectorAll(".notfi--location")

let count = 0;
// add blue background and counter
notfis.forEach((notfi) => {
  if (notfi.classList.contains("unread")) {
    counter(notfis)
    // redCircle(n);
    redCircle(notfi.childNodes[3].childNodes[1]) // means the 1st child of the 3rd child in child nodes of the notfi
  }
});

//counter
function counter(n) {
  count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i].classList.contains("unread")) {
      // console.log(i)
      count = count + 1;
    }
  }
  if (count == 0) {
    notfiCounter.innerHTML = "";
    notfiCounter.style.padding = 0;
  } else notfiCounter.innerHTML = count;
}

//mark all
btnMarkAll.addEventListener("click", markAllUnread);

function markAllUnread() {
  notfis.forEach((notfi) => {
    notfi.classList.remove("unread");
    
  });

  count = 0;
  notfiCounter.innerHTML = "";
  notfiCounter.style.padding = "0";
}


//creat span with class red circle and add it when class is unread
function redCircle(notfiDetails) {
  let redCircle = document.createElement("span");
  redCircle.classList.add("red-circle");
  notfiDetails.appendChild(redCircle)
}