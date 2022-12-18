window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //variables
    let painting = false;

    function startPosition() {
        painting = true;
        console.log("startPosition");
    }
    function finshedPosition() {
        painting = false;
        console.log("finshedPosition");
    }


    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finshedPosition);
    canvas.addEventListener("mousemove", draw);



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

})