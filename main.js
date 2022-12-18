window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    /*
        ctx.fillRect(60, 50, 100, 400)
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.strokeRect(40, 100, 200, 400)
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.strokeRect(60, 200, 200, 400)
    */
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    ctx.lineTo(100, 150);
    ctx.stroke();
})