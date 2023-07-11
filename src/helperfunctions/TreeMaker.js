
const { v4: uuidv4 } = require('uuid');


class Node {
    constructor(dist) {
        this.values = dist;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }

    getValues() {
        return this.values
    }

    contains(char) {
        // loop through values
        if (this.values.key.includes(char)) {
            return true;
        }
        return false;
    }

    addRightChild(node) {
        this.rightChild = node;
    }

    addLeftChild(node) {
        this.leftChild = node;
    }

    addParent(node) {
        this.parent = node;
    }

    right() {
        return this.rightChild;
    }

    left() {
        return this.leftChild;
    }

    parent() {
        return this.parent;
    }
}


class Tree {
    constructor(distribution) {
        this._root = null
        this.nodes = []
        this.distribution = distribution;
    }

    sameChars(string1, string2) {
        if (string1.length !== string2.length) {
            return false;
        }
        return new Set(string1).size === new Set(string1 + string2).size;
    }

    findNode(key) {
        // loop through nodes
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.sameChars(this.nodes[i].values.key, key)) {
                return this.nodes[i]
            }
        }
        return null
    }

    build() {
        while (Object.keys(this.distribution).length > 1) {
            let lowest = this.removeLowestValue();
            let secondLowest = this.removeLowestValue();
            let leftChild = new Node({
                key: lowest.key,
                value: lowest.value,
                uuid: uuidv4()
            });
            let rightChild = new Node({
                key: secondLowest.key,
                value: secondLowest.value,
                uuid: uuidv4()
            });
            if (this.findNode(leftChild.values.key)) {
                leftChild = this.findNode(leftChild.values.key)
            }
            if (this.findNode(rightChild.values.key)) {
                rightChild = this.findNode(rightChild.values.key)
            }
            let parentNode = new Node({
                key: leftChild.values.key + rightChild.values.key,
                value: leftChild.values.value + rightChild.values.value,
                uuid: uuidv4()
            })
            leftChild.addParent(parentNode);
            rightChild.addParent(parentNode);
            parentNode.addLeftChild(leftChild);
            parentNode.addRightChild(rightChild);
            this.distribution[parentNode.getValues().key] = parentNode.getValues().value;
            this.addNodes(leftChild, rightChild, parentNode)
        }
     
        let _root = this.nodes[this.nodes.length - 1]
        this._root = _root;
        return _root;
    }

    addNodes(left, right, parent) {
        if (!this.findNode(left.values.key)) {
            this.nodes.push(left)
        }
        if (!this.findNode(right.values.key)) {
            this.nodes.push(right)
        }
        if (!this.findNode(parent.values.key)) {
            this.nodes.push(parent)
        }
    }

    removeLowestValue() {
        let lowestValue = null;
        let lowestValueKey = null;
        for (let key in this.distribution) {
            if (lowestValue === null || this.distribution[key] < lowestValue) {
                lowestValue = this.distribution[key];
                lowestValueKey = key;
            }
        }
        // remove the lowest value from the distribution
        delete this.distribution[lowestValueKey];
        return {
            key: lowestValueKey,
            value: lowestValue
        }
    }


    printTree(node) {
        console.log(node.values)
        if (node.left()) {
            this.printTree(node.left())
        }
        if (node.right()) {
            this.printTree(node.right())
        }
        else {
        }
    }

    search(_root, char) {
        return this.walkTree(_root, char, [])
    }

    encode(message) {
        this.build()
        if (!this._root) {
            console.log("You have not built a tree yet...")
            return
        }
        let bits = []
        for (let i = 0; i < message.length; i++) {
            let rawBits = this.search(this._root, message[i])
            bits.push({
                character: message[i],
                bits: rawBits
            })
        }
        return bits
    }

    walkTree(node, char, bits) {
        // console.log(node.values)
        if (node.values.key.length == 1) {
            return bits
        } else if (node.left().contains(char)) {
            bits.push(0)
            return this.walkTree(node.left(), char, bits)
        } else if (node.right().contains(char)) {
            bits.push(1)
            return this.walkTree(node.right(), char, bits)
        }
    }

    generateMarkdown() {
        this.build()
        let content = "flowchart TB\n"
        content += this.testMarkDown()
        return content
    }

    testMarkDown() {
        // loop through nodes
        let content = ""
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].left()) {
                content += `${this.nodes[i].values.uuid}[${this.nodes[i].values.key}]--  0  ---${this.nodes[i].left().values.uuid
                    }[${this.nodes[i].left().values.key}]\n`
            }
            if (this.nodes[i].right()) {
                content += `${this.nodes[i].values.uuid}[${this.nodes[i].values.key}]--  1  ---${this.nodes[i].right().values.uuid
                    }[${this.nodes[i].right().values.key}]\n`
            } else {
               
            }
        }
        return content
    }
}
export default Tree;