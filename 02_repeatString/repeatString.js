const repeatString = function(word, num) {
    let str = '';
    if (num < 0) return 'ERROR';
    for (let i = 0; i < num; i++) {
      str += word;
    }
    return str;
  };

// Do not edit below this line
module.exports = repeatString;
