function longestStringjs(a) {
    var longest = 0;
    var longString = [];
    a.forEach(word => {
        if (word.length>longest) {
            longest = word.length;
        }
    });
    a.forEach(word => {
        if (word.length===longest) {
            longString.push(word);
        }
    });

    return longString;
}

console.log(longestStringjs(['aaa','a','cat','no']));