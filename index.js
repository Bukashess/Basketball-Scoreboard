
let scoreEl = document.getElementById("score-El")
let counts = 0
let scoreEls = document.getElementById("score-Els")
let count = 0

function one(){
    counts += 1
    scoreEl.textContent = counts

    
}
function two(){
    counts += 2
    scoreEl.textContent = counts

    
}
function three(){
    counts += 3
    scoreEl.textContent = counts

    
}
function guestone(){
    count += 1
    scoreEls.textContent = count
}

function guesttwo(){
    count += 2
    scoreEls.textContent = count
}

function guestthree(){
    count += 3
    scoreEls.textContent = count
}

