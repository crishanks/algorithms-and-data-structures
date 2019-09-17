const reverse = function(x) {
    let string = x.toString();
    if (string[0] === '-') {
        string = string.slice(1) + '-'; 
    }
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        const currentNum = string[i];
        result += currentNum;
    }
    if (Number(result) >= 2147483647 || Number(result) <= -2147483648) return 0;
    return Number(result);
};

reverse(-321); // -123