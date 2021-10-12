function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sumRes").innerHTML = sum;
    document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";

    } else {
        document.getElementById("finalRes").innerHTML = "DRAW - please try again."
    }

}
function blastOff() {
    var currTime = 50;
    document.getElementById("countdowntimer").innerHTML = currTime

    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = currTime
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdowntimer").innerHTML = "Blastoff"
    }, 50000);

}