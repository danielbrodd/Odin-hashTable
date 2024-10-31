import HashMap from './hashmap.js'

// let hashMap = new HashMap();

// console.log(hashMap.size)
// console.log(hashMap.capacity)
// console.log(hashMap.buckets)

// hashMap.set("wonder", "HEllo")
// console.log(hashMap.size)
// hashMap.set("wonder", "no")
// hashMap.set("fear", "yes")
// console.log(hashMap.size)
// let res9 = hashMap.keys();
// console.log(res9)

// hashMap.entries();

// let res11 = hashMap.values();
// console.log(res11)
// let res7 =hashMap.has("wonder")

// let res1 = hashMap.get("fear")
// let res2 = hashMap.get("blueberry")


// console.log(`res1: ${res1}, res2: ${res2}`)

// let res3 = hashMap.remove("wonder")
// console.log(hashMap.size)
// let res4 = hashMap.remove("k")

// let res10 = hashMap.keys();
// console.log(res10)

// console.log(`res3: ${res3}, res4: ${res4}`)

// console.log(hashMap)


// let res5 =hashMap.has("fear")
// let res6 =hashMap.has("wonder")

// console.log(res5)
// console.log(res7)
// console.log(res6)
// console.log(hashMap.size)

// hashMap.clear();
// console.log(hashMap.length());
// console.log(hashMap)

// hashMap.set("new", "newData")
// console.log(hashMap.length());

// let res8 = hashMap.keys();

// console.log(res8)

// let res12 = hashMap.values();
// console.log(res12)

// hashMap.entries();


const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('moon', 'silver')

console.log(test.entries());


console.log(test)

console.log("get", test.get('lion'))
console.log("has true", test.has('jacket'))
console.log("has false",test.has('blueberry'))
console.log("length",test.length())
console.log("remove moon", test.remove('moon'))
console.log("length",test.length())
console.log("keys",test.keys())
console.log("values",test.values())
console.log("entries",test.entries())
console.log("clear",test.clear())
test._resize()
console.log(test)