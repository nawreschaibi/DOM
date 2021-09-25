let likes =Array.from(document.querySelectorAll("#likes"))
let minus=Array.from(document.querySelectorAll(".minus"))
let plus=Array.from(document.querySelectorAll (".plus"))

  

function increment(el) {
    el.target.previousElementSibling.innerText =
      Number(el.target.previousElementSibling.innerText) + 1;
      console.log(el)
      
  }
  function decrement(el) {
    if (Number(el.target.nextElementSibling.innerText) > 0) {
      el.target.nextElementSibling.innerText =
        Number(el.target.nextElementSibling.innerText) - 1;
       
    }
  }
  
function changeColor(el) {
  if (el.target.style.color !== "bleu") {
    el.target.style.color = "bleu";
  } else {
    el.target.style.color = "yellow";
  }
}
for (let i = 0; i <likes.length; i++) {
  likes[i].addEventListener("click", changeColor);
  plus[i].addEventListener("click", increment);
  minus[i].addEventListener("click", decrement);
}
