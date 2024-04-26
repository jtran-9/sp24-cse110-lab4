function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const intervalID = setInterval(printTime, 1000);
