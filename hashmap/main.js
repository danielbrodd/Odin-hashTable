import HashMap from './hashmap.js'

let hashMap = new HashMap();

console.log(hashMap.size)
console.log(hashMap.capacity)
console.log(hashMap.buckets)

hashMap.set("wonder", "HEllo")

hashMap.set("wonder", "no")
hashMap.set("fear", "yes")
