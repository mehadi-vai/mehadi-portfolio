function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const time = `${h}:${m}:${s}`;

  document.getElementById("clock").innertext = time;

  const options ={ weekday: 'long', year:'numeric', month:'long', day:'numeric'};

  const date = now.toLocaleDateString(undefined, options);

  document.getElementById("date").innertext = date;
}

function changBackground(){
    const colors =["#1abc9c", "#3498db", "#9b59b6", "e74c3c", "#2ecc71"];

    const random = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[random];
}

setInterval(updateClock, 1000);
updateClock();