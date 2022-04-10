const sum = require('sum');

const summarize = (text, num) => {
    return sum({'corpus': text, 'nSentences': num});
};


module.exports = { summarize };