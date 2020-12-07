function launchCodes(sysName, sysNumber) {
    const launchCode = {};

    for(let i=0; i<sysName.length; i++) {
        if(launchCode.hasOwnProperty(sysName[i])) {
            if (launchCode[sysName[i]] >= sysNumber[i]) {
                return false;
            }
            launchCode[sysName[i]] = sysNumber[i];
        }
        else {
            launchCode[sysName[i]] = sysNumber[i];
        }
    }
    return true;
};

console.log(launchCodes(['stage1', 'stage2', 'dragon','stage1', 'stage2', 'dragon'], [1,10,11, 2, 12, 111]));
console.log(launchCodes(['stage1', 'stage1', 'stage2', 'dragon'], [2, 1, 12, 111]));