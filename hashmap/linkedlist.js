import Node from "./node.js";

class LinkedList {
    constructor(parameters) {
        this.head = null
    };

    append(value){
        const newNode = new Node(value);
        
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; 
        }
    };
    prepend(value){
        const newNode = new Node(value)
        if (!this.head){
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    };
    size() {
        let size = 0
        let current = this.head
        if (!this.head) return 0;
        while(current){
            size++;
            current = current.next
        }
        return size
    };
    getHead() {
        console.log(this.head);
        return this.head.value
    };
    getTail(){
        let current = this.head;
        while(current.next){
            current = current.next
        };
        console.log(current);
        return current.value
    };
    at(index){
        if(index < 0) {
            throw new Error('Cannot handle negative index')
        }
        let current = this.head;
        let counter = 0;
        while (counter < index){
            counter++
            current = current.next


            if(!current) {
                console.log('out of bounds')
                throw new Error('out of bounds: no such index')
            }
        }
        console.log(current)
        return current
    };
    pop(){
        if (!this.head) return undefined;

        if (!this.head.next) {
            const lastValue = this.head.value
            this.head = null
            return lastValue;
        }

        let current = this.head
        while(current.next.next){
            current = current.next
        }
        let lastValue = current.next.value;
        current.next = null
        console.log(lastValue)
        return lastValue


    };
    contains(value){
        let current = this.head;
        
        while(current){
            if (current.value === value) return true;
            current = current.next;
        }
        return false
    };

    find(value){
        let current = this.head;

        while (current){
            if (current.value === value) {
                return current.value
            }
            current = current.next;
        }
        return null
    };
    toString(){
        let current = this.head;
        let string = ""
        while(current){
            string += `(${current.value}) -> `
            current = current.next
        }
        string += 'null'
        console.log(string)
    };

    // To do
    insertAt(value, index) {
        if (index < 0) throw new Error("Cannot handle negative index");

        let current = this.head;
        let previous = null;
        let counter = 0;
        let newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode
            return
        }
        while(counter < index) {
            previous = current
            current = current.next;
            counter++
            
            if(!current) {
                console.log('out of bounds')
                throw new Error('out of bounds: no such index, use .append()')
            }
        }
        newNode.next = current;
        previous.next = newNode;
    };
    removeAt(index) {
        if (index < 0) throw new Error("Cannot handle negative index");

        let current = this.head;
        let previous = null;
        let counter = 0;
        
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        while(counter < index) {
            counter++
            previous = current;
            current = current.next;
            
        }
        previous.next = current.next;
        current = null;
    };
}

export default LinkedList