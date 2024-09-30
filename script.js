let scoreTag = document.getElementById('score')
let result = document.getElementById('result')
 
number = 0
 

function increment(){
    number = number + 1
    scoreTag.innerText = number
    
}
function decrement(){
    number = number - 1
    scoreTag.innerText = number   
     
}
 
function save(){
    resultShown = number + ' , '
    result.textContent += resultShown
}

function reset(){
    number = 0
    scoreTag.innerText = number
    result.textContent = "The saved counts are: "
}