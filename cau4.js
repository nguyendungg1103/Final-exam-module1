class Rectangle {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.height = 100;
        this.width = 200;
        this.color ="blue";
    }
    render()
        {
            let canvas = document.getElementById("mycanvas");
            let ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.closePath();

        }

    }
    let rectangle = new Rectangle()
rectangle.render()

