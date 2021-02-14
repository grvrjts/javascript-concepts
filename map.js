const arr = [1,2,3,4,5,6];
const modifiedArray = arr.map(element =>{
    return element*2;
});

console.log(modifiedArray);

//Step 2 — Converting a String to an Array
const str = "Gaurav";
const map = Array.prototype.map;
const modifiedName = map.call(str , element=>{
    return `${element}a`
});
console.log(modifiedName);

//Step 4 — Reformatting Array Objects
const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
];

const modifiedUsers = myUsers.map(item =>{
    const container = {};
    container[item.name] = item.likes;
    container.age = item.name.length *10 ;
    return container;
});
console.log("modifiedUsers--->",modifiedUsers);