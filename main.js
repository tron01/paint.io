

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d");


    let box = document.querySelector('#main-content');
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    console.log(width);
    console.log(height);

    //Resizing
    canvas.height = height;
    canvas.width = width;

    //variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        console.log("startPosition");
        draw(e);
    }
    function finshedPosition() {
        painting = false;
        console.log("finshedPosition");
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }

    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finshedPosition);
    canvas.addEventListener("mousemove", draw);


    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("touchend", finshedPosition);
    canvas.addEventListener("touchmove", draw);

    canvas.addEventListener("dragstart", startPosition);
    canvas.addEventListener("dragover", finshedPosition);
    canvas.addEventListener("drop", draw);

    /*
           //shapes
        ctx.fillRect(60, 50, 100, 400)
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.strokeRect(40, 100, 200, 400)
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;
        ctx.strokeRect(60, 200, 200, 400)
        
            // path
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(200, 100);
        ctx.lineTo(200, 300);
        ctx.lineTo(100, 300);
        ctx.closePath();
        ctx.stroke();
    
     */

    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }

})