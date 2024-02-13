function checkName(name) {
    // const words= ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    if (typeof name !== 'string') {
        return "invalid";
    }
    let words= name.slice(-1);
 if (['a', 'y', 'i', 'e', 'o', 'u', 'w'] .includes(words)) {
        return "Good Name";
    } 
    else {
        return "Bad Name";
    }
}
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("sirao")); //qus pic have something wrong if there are last ** then ist bad word bt hare are pic have no one are bad key  bt still say bad 
console.log(checkName("Jhankar")); 
console.log(checkName(199)); 
console.log(checkName(["Rashed"]));
