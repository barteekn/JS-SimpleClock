function display() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let time = h + ":" + m + ":" + s;
    document.getElementById("time").innerHTML = time;
}
setInterval(display, 1000);

// Copilot sugestion
// function display()
// {
//     var d = new Date();
//     var h = d.getHours();
//     var m = d.getMinutes();
//     var s = d.getSeconds();
//     var ampm = "AM";
//     if (h > 12)
//     {
//         h = h - 12;
//         ampm = "PM";
//     }
//     if (h < 10)
//     {
//         h = "0" + h;
//     }
//     if (m < 10)
//     {
//         m = "0" + m;
//     }
//     if (s < 10)
//     {
//         s = "0" + s;
//     }
//     document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " " + ampm;
//     setTimeout(display, 1000);
// }
// display();
// # sourceMappingURL=script.js.map