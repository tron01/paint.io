
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d");


let box = document.querySelector('#main-content');
let width = box.offsetWidth;
let height = box.offsetHeight;
//Resizing
canvas.height = height;
canvas.width = width;

function toImg() {
    // Convert our canvas to a data URL
    let canvasUrl = canvas.toDataURL();
    // Create an anchor, and set the href value to our data URL
    const createEl = document.createElement('a');
    createEl.href = canvasUrl;

    // This is the name of our downloaded file
    createEl.download = "canvas";

    // Click the download button, causing a download, and then remove it
    createEl.click();
    createEl.remove();
}
function Clear_all() {
    console.log("clicked");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}
function s_pen(i) {
    console.log(i);
    if (i == 1) {
        ctx.lineWidth = 2;
    } else if (i == 2) {
        ctx.lineWidth = 10;
    } else if (i == 3) {
        ctx.lineWidth = 15;
    } else if (i == 4) {
        ctx.lineWidth = 20;
    } else if (i == 5) {
        ctx.lineWidth = 30;
    } else if (i == 6) {
        ctx.lineWidth = 40;
    } else if (i == 7) {
        ctx.lineWidth = 50;
    } else if (i == 8) {
        ctx.lineWidth = 80;
    }
}
function Er() {
    ctx.strokeStyle = "white";
}

function b_color(i) {
    console.log(i);
    if (i == 0) {
        ctx.fillStyle = "00FFFFFF";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 1) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 2) {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 3) {
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 4) {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 5) {
        ctx.fillStyle = "pink";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 6) {
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 7) {
        ctx.fillStyle = "#808000";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 8) {
        ctx.fillStyle = "#FFA500";
        ctx.fillRect(0, 0, width, height);
    } else if (i == 9) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, width, height);
    }
}

function s_color(i) {
    console.log(i);
    if (i == 1) {
        ctx.strokeStyle = "black";
    } else if (i == 2) {
        ctx.strokeStyle = "red";
    } else if (i == 3) {
        ctx.strokeStyle = "blue";
    } else if (i == 4) {
        ctx.strokeStyle = "green";
    } else if (i == 5) {
        ctx.strokeStyle = "pink";
    } else if (i == 6) {
        ctx.strokeStyle = "grey";
    } else if (i == 7) {
        ctx.strokeStyle = "#808000";
    } else if (i == 8) {
        ctx.strokeStyle = "#FFA500";
    }
}


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

})
