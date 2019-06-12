function Controller() {
    // this.logic = new Logic();
    this.tree = new Tree();
};


Controller.prototype.init = function () {
    const canvas = document.getElementById('c1');
    this.ctx = canvas.getContext('2d');
    const number = document.getElementById('add_number');
    const deleteNumber = document.getElementById("delete_number");
    const upgrade = document.getElementById("upgrade");
    const createNode = document.getElementById("createNode");
    upgrade.addEventListener('click', function () {
        this.clearCanvas();
    }.bind(this), false);
    createNode.addEventListener('click', function () {
            this.addNode(number.value);
        }.bind(this), false);
    // ctx.beginPath();
    // ctx.arc(400, 40, 30, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'red';
    // ctx.fill();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();
    //
    // ctx.fillStyle = 'black';
    // ctx.font = '20px Arial';
    // ctx.fillText('400', 390, 50);
    //
    //
    // ctx.lineWidth = "3";
    // ctx.moveTo(400, 40);
    // ctx.lineTo(600, 80);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.arc(600, 80, 30, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'red';
    // ctx.fill();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();
    //
    // ctx.fillStyle = 'black';
    // ctx.font = '20px Arial';
    // ctx.fillText('600', 590, 90);
    //
    //
    // ctx.lineWidth = "3";
    // ctx.moveTo(400, 40);
    // ctx.lineTo(200, 80);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.arc(200, 80, 30, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'red';
    // ctx.fill();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();
    //
    // ctx.fillStyle = 'black';
    // ctx.font = '20px Arial';
    // ctx.fillText('200', 190, 90);
    //
    //
    // ctx.lineWidth = "3";
    // ctx.moveTo(200, 80);
    // ctx.lineTo(300, 120);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.arc(300, 120, 30, 0, 2 * Math.PI, false);
    // ctx.fillStyle = 'red';
    // ctx.fill();
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'red';
    // ctx.stroke();
    //
    // ctx.fillStyle = 'black';
    // ctx.font = '20px Arial';
    // ctx.fillText('300', 290, 130);
    //
};
Controller.prototype.addNode = function (el) {
  let node = this.tree.push(this.tree.rootNode, el);
  this.drawNode(node.el, node.posLeft, node.posTop, node.rootPosLeft, node.rootPosTop);
};

Controller.prototype.drawNode = function (el, x, y, rootX, rootY) {
console.log("Controller.prototype.drawNode     "+ this.tree.size);
if(this.tree.size===1) {
    this.ctx.beginPath();
    this.ctx.arc(400, 40, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'red';
    this.ctx.stroke();

    this.ctx.fillStyle = 'black';
    this.ctx.font = '20px Arial';
    this.ctx.fillText(el, 390, 50);
};
    if(this.tree.size>1){
        console.log("Welcome no 2th");
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(rootX, rootY);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(x, y, 30, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'red';
        this.ctx.fill();
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'red';
        this.ctx.stroke();

        this.ctx.fillStyle = 'black';
        this.ctx.font = '20px Arial';
        this.ctx.fillText(el, x-10, y);
    }


};

Controller.prototype.clearCanvas = function () {
    console.log(" Controller.prototype.clearCanvas  "+ this.ctx);
    this.tree.upgrade();
   this.ctx.clearRect(0, 0, 800, 300);
};



