// Counter of attempt for binary search

let binaryMaxCount = count => {
    let num = 0;
    for (let i = 0; i < count; i++) {
        while (Math.round(count) > 1) {
            count /= 2;
            num++;
        }
    }
    return num
};
binaryMaxCount(4000000000)