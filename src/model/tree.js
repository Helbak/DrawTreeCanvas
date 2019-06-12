function Tree() {
    this.sizeArray = 0;
    this.nodesArray = [];
    this.rootNode = null;
    this.size = 0;
};

Tree.prototype.getNodesArray = function(){
    return this.nodesArray;
}

Tree.prototype.initList = function (el) {
    if (this.rootNode !== null) {
        return false;
    }
    if (this.rootNode == null) {
        this.rootNode = this.createNode(parseInt(el), 1, 405, 40, null, null);
        return this.rootNode;
    }
};

Tree.prototype.push = function (firstNode, el) {
    console.log(" Tree.prototype.push = function  "+el);
    if (this.rootNode === null) {
        this.initList(el);
        this.sumSize();
        return this.rootNode;
    }
    if (firstNode.el === el) {
        return el;
    }
    if (firstNode.el > el && firstNode.left === null) {
        let posTop = this.getPositionTop(el, this.rootNode, 70);
        let floor = this.getFloor(posTop);
        let posLeft = this.getPositionLeft(el, this.rootNode, 404);
        firstNode.left = this.createNode(el, floor, posLeft, posTop, firstNode.posLeft, firstNode.posTop);
        this.sumSize();
        return firstNode.left;
    }
    if (firstNode.el < el && firstNode.right === null) {
        let posTop = this.getPositionTop(el, this.rootNode, 70);
        let floor = this.getFloor(posTop);
        let posLeft = this.getPositionLeft(el, this.rootNode, 404);
        ;
        firstNode.right = this.createNode(el, floor, posLeft, posTop, firstNode.posLeft, firstNode.posTop);
        this.sumSize();
        return firstNode.right;
    }
    if (firstNode.el < el && firstNode.right !== null) {
        return this.push(firstNode.right, el);
    }
    if (firstNode.el > el && firstNode.left !== null) {
        return this.push(firstNode.left, el);
    }

};

Tree.prototype.createNode = function (el, floor, positionX, positionY, rootPosLeft, rootPosTop) {
    this.addNodesToArray(el);
    return {
        el: el,
        floor: floor,
        posLeft: positionX,
        posTop: positionY,
        rootPosLeft: rootPosLeft,
        rootPosTop: rootPosTop,
        right: null,
        left: null,
    }
};
Tree.prototype.getPositionTop = function (el, firstNode, posTop) {

    if (firstNode.el > el && firstNode.left === null) {
        return posTop;
    }
    if (firstNode.el < el && firstNode.right === null) {
        return posTop;
    }
    if (firstNode.el < el && firstNode.right !== null) {
        return this.getPositionTop(el, firstNode.right, posTop + 60);
    }
    if (firstNode.el > el && firstNode.left !== null) {
        return this.getPositionTop(el, firstNode.left, posTop + 60);
    }
};
Tree.prototype.getPositionLeft = function (el, firstNode, posLeft) {

    if (firstNode.el > el && firstNode.left === null) {
        let step = this.getStep(firstNode.floor);
        posLeft = firstNode.posLeft - step;
        return posLeft;
    }
    if (firstNode.el < el && firstNode.right === null) {
        let step = this.getStep(firstNode.floor);
        posLeft = firstNode.posLeft + step;
        return posLeft;
    }
    if (firstNode.el < el && firstNode.right !== null) {
        let step = this.getStep(firstNode.floor);
        posLeft = firstNode.posLeft + step;
        return this.getPositionLeft(el, firstNode.right, posLeft);
    }
    if (firstNode.el > el && firstNode.left !== null) {
        let step = this.getStep(firstNode.floor);
        posLeft = firstNode.posLeft - step;
        return this.getPositionLeft(el, firstNode.left, posLeft);
    }
};
Tree.prototype.getFloor = function (posTop) {
    return (posTop -20)/40;
};
Tree.prototype.getStep = function (floor) {
    let step = 404;
    for (let i = 1; i <= floor; i++) {
        step = step / 2
    }
    return step;
};
Tree.prototype.getSize = function () {
    return this.size;
}
Tree.prototype.sumSize = function () {
    this.size++;
    return this.size;
};
Tree.prototype.upgrade = function () {
    this.size = 0;
    this.rootNode = null;
};

Tree.prototype.isThisNodeInArray=function (el) {
    for(let i =0; i<this.nodesArray.length; i++){
        if(el===this.nodesArray[i]){
            return true;
        }
    }
    return false;
};
Tree.prototype.addNodesToArray = function (el) {
    if(this.isThisNodeInArray(el)===false){
        this.nodesArray[this.sizeArray] = parseInt(el);
        this.sizeArray++;
    }
};







