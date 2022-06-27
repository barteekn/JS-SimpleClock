function display() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let time = h + ":" + m + ":" + s;
    document.getElementById("time").innerHTML = time;
}
setInterval(display, 1000);