let big__box = document.querySelector(".big__box")
let box = document.querySelector(".box")
let center = document.querySelector(".center")
let around = document.querySelector(".around")
let between = document.querySelector(".between")
let end = document.querySelector(".end")

center.onclick = () => {
    big__box.style.justifyContent = "center"
}
around.onclick = () => {
    big__box.style.justifyContent = "space-around"
}
between.onclick = () => {
    big__box.style.justifyContent = "space-between"  
}
end.onclick = () => {
    big__box.style.justifyContent = "end"  
}