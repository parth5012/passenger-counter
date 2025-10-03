// document.getElementById("count").innerText = 5
// document is the document object referring to html document
// The DOM(Document Object Model) helps us to use js to modify html
// // initialised count variable
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
//  console.log(count) // to print to console
let count = 0
let count_ele = document.getElementById("count")
function increment(){
    // console.log("The button was clicked")
    count += 1
    count_ele.innerText = count
}
let save_ele = document.getElementById("save-ele")
function save(){
    let countStr = count
    // save_ele.innerText += countStr + "-"
    save_ele.textContent += countStr + " - "
    count = 0
    count_ele.textContent = 0
    // console.log(count)
}