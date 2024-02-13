function deleteInvalids(array) {
    return array.filter(items => !isNaN(items));
}
console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined]));
