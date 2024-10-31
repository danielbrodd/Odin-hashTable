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
        if (this.size >= (this.capacity * this.loadFactor)) {
            this._resize();

        };
        
        
    }
    get(key) {
        let hashCode = this.hash(key);
        this.safeGuard(hashCode);
        
        let currentNode = this.buckets[hashCode].head;

        if (currentNode === null) return null

        while (currentNode !== null) {
            if (currentNode.value.key === key) {
                return currentNode.value.value
            };
            currentNode = currentNode.next
        };
        return null
    }
    has(key){

        let hashCode = this.hash(key);
        this.safeGuard(hashCode);

        let currentNode = this.buckets[hashCode].head;

        if (currentNode === null) {
            return false
        } else {
            while (currentNode !== null) {
                if (currentNode.value.key === key) return true;
                currentNode = currentNode.next
            };
            return false
        };
    }
    remove(key){
        let hashCode = this.hash(key);
        this.safeGuard(hashCode);

        
        let currentNode = this.buckets[hashCode].head;

        if(currentNode === null) return false
        let index = 0;
        while(currentNode !==null) {
            if (currentNode.value.key === key){
                this.buckets[hashCode].removeAt(index);
                this.size--
                if (this.size < this.capacity / 4 && this.capacity > 16) {
                    this._resize();
                }
                return true
            };
            currentNode = currentNode.next
            index++;
        };
        return false
    };
    length() {
        return this.size
    };
    clear(){
        this.size = 0
        this.buckets.forEach(bucket =>{
            bucket.head = null;
        })
    
    }
    keys(){
        let keys = [];
        this.buckets.forEach(bucket =>{
        let currentNode = bucket.head;
        while (currentNode !== null){
            keys.push(currentNode.value.key)
            currentNode = currentNode.next
        }
        })
        return keys
    }
    values(){
        let values = [];
        this.buckets.forEach(bucket =>{
        let currentNode = bucket.head;
        while (currentNode !== null){
            values.push(currentNode.value.value)
            currentNode = currentNode.next
        }
        })
        return values
    }
    entries() {
        let entries = [];
        this.buckets.forEach(bucket => {
            let currentNode = bucket.head;
            while (currentNode !== null){
                let entry = [currentNode.value.key, currentNode.value.value];
                entries.push(entry);

                currentNode = currentNode.next;
            }
        })

        return entries
    }


    _resize(){

        if (this.size > this.capacity * this.loadFactor) {
            this.capacity *= 2;
        }
        
        else if (this.size <= this.capacity / 4 && this.capacity > 16) {
            this.capacity /= 2;
        } else {
            return; 
        }

        let entries = this.entries();
        this.clear();
        this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());

        entries.forEach(entry => {
            this.set(entry[0], entry[1]);
        });
    };
}

export default HashMap;