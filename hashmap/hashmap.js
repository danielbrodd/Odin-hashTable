import LinkedList from "./linkedlist.js";

class HashMap{
    constructor() {
        this.capacity = 16,
        this.loadFactor = 0.75
        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
        this.size = 0;
    };

    safeGuard(index){
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
    }
    hash(key) {
        let hashCode = 0;
        
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return Math.floor(Math.abs(hashCode) % this.capacity)
    }
    set(key, value) {
        let hashCode = this.hash(key);
        this.safeGuard(hashCode);
        

        if (this.size > (this.capacity * this.loadFactor)) {
            this._grow();
            this.set(key, value)
            return
        };

        let currentNode = this.buckets[hashCode].head;

        while (currentNode !== null) {
            if (currentNode.value.key === key) {
                currentNode.value.value = value;
                
                
                return;
            }
            currentNode = currentNode.next;
        }
        
        this.buckets[hashCode].append( { key: key , value: value });
        this.size++;
        
        
        
    }


    _grow(){

    }
}

export default HashMap;