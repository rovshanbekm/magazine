let btn = document.querySelector(".filter__btn")
let btn2 = document.querySelector(".filter__btn2")
let selec1 = document.querySelector(".selected-filters")
let selec = document.querySelector(".selected__filters")
let check = document.querySelector('.checkbox2')

btn.addEventListener("click", () => {
    btn.style.border = "7px solid black"
    btn2.style.border = "1.5px solid #D1D1D1"
})

btn2.addEventListener("click",  function() {
    btn2.style.border = "7px solid black"
    btn.style.border = "1.5px solid #D1D1D1"
    const li = document.createElement("li")
    li.innerHTML = `<p>Selected Filtre</p>
    <button class="delete-icon"><svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M9.18031 9.18L2.82031 2.82" stroke="#C8DEB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M9.18031 2.82L2.82031 9.18" stroke="#C8DEB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg></button>`;

li.classList.add("item")
selec1.appendChild(li)

Object.assign(li.style, {
    width: "118px",
    height: "18px",
    color: "#6A983C",
    backgroundColor: "#F4F8EC",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: "600",
    fontHeight: "100%"
});


let deleteBtn = li.querySelector(".delete-icon")
    deleteBtn.style.border = "none"
    deleteBtn.style.marginTop = "4px"
    deleteBtn.style.borderRadius = "50%"
    deleteBtn.style.backgroundColor = "transparent"

li.querySelector(".delete-icon").addEventListener("click",() =>{
    selec1.removeChild(li)
})
})
check.addEventListener("click",  function() {
  
    const li = document.createElement("li")
    li.innerHTML = `<p>Selected Filtre</p>
    <button class="delete-icon"><svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
<path d="M9.18031 9.18L2.82031 2.82" stroke="#C8DEB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
<path d="M9.18031 2.82L2.82031 9.18" stroke="#C8DEB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="bevel"/>
</svg></button>`;

Object.assign(li.style, {
    width: "118px",
    height: "18px",
    color: "#6A983C",
    backgroundColor: "#F4F8EC",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: "600",
    fontHeight: "100%"
});

li.classList.add("item")
selec1.appendChild(li)

let deleteBtn = li.querySelector(".delete-icon")
    deleteBtn.style.border = "none"
    deleteBtn.style.marginTop = "4px"
    deleteBtn.style.borderRadius = "50%"
    deleteBtn.style.backgroundColor = "transparent"

li.querySelector(".delete-icon").addEventListener("click",() =>{
    selec1.removeChild(li)
})
})



const minSlider = document.getElementById("minPrice");
const maxSlider = document.getElementById("maxPrice");
const track = document.querySelector(".slider-track");

function updateTrack() {
  const min = parseInt(minSlider.value);
  const max = parseInt(maxSlider.value);
  const range = parseInt(minSlider.max) - parseInt(minSlider.min);
  
  const left = ((min - minSlider.min) / range) * 99;
  const right = ((max - minSlider.min) / range) * 99;

  track.style.left = `${left }%`; 
   track.style.width = `${right - left}%`;
}

minSlider.addEventListener("input", updateTrack);
maxSlider.addEventListener("input", updateTrack);
updateTrack();


let heart = document.querySelector(".first-icon")
let heart2 = document.querySelector(".second-icon")
let btn3 = document.querySelector(".add-to-wish")

btn3.addEventListener("click",() => {
    if(heart2.style.display === "block"){
        heart.style.display = "block"
        heart2.style.display = "none"
    }else {
        heart.style.display = "none"
        heart2.style.display = "block"
    }
})

let page = document.querySelector(".page-1")
let page1 = document.querySelector(".page-2")
let page2 = document.querySelector(".page-3")
let page3 = document.querySelector(".page-4")

page.addEventListener("click",() => {
    page.style.color = '#6A983C'
    page1.style.color = 'black'
    page2.style.color = 'black'
    page3.style.color = 'black'
})
page1.addEventListener("click",() => {
    page1.style.color = '#6A983C'
    page.style.color = "black"
    page2.style.color = "black"
    page3.style.color = "black"
})
page2.addEventListener("click",() => {
    page2.style.color = '#6A983C'
    page.style.color = "black"
    page1.style.color = "black"
    page3.style.color = "black"
})
page3.addEventListener("click",() => {
    page3.style.color = '#6A983C'
    page.style.color = "black"
    page1.style.color = "black"
    page2.style.color = "black"
})