

window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas")
    const ctx = canvas.getContext("2d");


    let box = document.querySelector('#main-content');
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    //Resizing
    canvas.height = height;
    canvas.width = width;

    //variables
    let painting = false;
    //get current mouse position
    function getMousePosition(canvas, e) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }
    }

    function startPosition(e) {
        painting = true;
        getMousePosition(canvas, e);
        draw(e);
    }
    function finshedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        var currentPos = getMousePosition(canvas, e);


        console.log("Coordinate x: " + currentPos.x, "Coordinate y: " + currentPos.y);
        ctx.lineCap = 'round';
        ctx.lineTo(currentPos.x, currentPos.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(currentPos.x, currentPos.y);

    }


    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finshedPosition);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("touchstart", function (e) {
        let mousePos = getMousePosition(canvas, e);
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });

        canvas.dispatchEvent(mouseEvent);
    }, false);

    canvas.addEventListener("touchend", function (e) {
        var mouseEvent = new MouseEvent("mouseup", {});

        canvas.dispatchEvent(mouseEvent);
    }, false);


    canvas.addEventListener("touchmove", function (e) {
        var touch = e.touches[0];
        var mouseEvent = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
        });

        canvas.dispatchEvent(mouseEvent)
    }, false);


    //prevent scrolling when touch the canvas

    canvas.addEventListener("touchstart", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, { passive: false });

    canvas.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, { passive: false });

    canvas.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, { passive: false });
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