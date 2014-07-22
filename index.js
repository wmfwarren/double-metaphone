var metaphone = require('double-metaphone');
var inputElement = document.getElementsByTagName('input')[0];
var outputElement = document.getElementsByTagName('output')[0];

function getPhonetics() {
    var value = metaphone(inputElement.value);

    if (value[0].length === 0 && value[1].length === 0) {
        outputElement.textContent = '';
        return
    }

    outputElement.textContent = '["' + value[0] + '", "' + value[1] + '"]';
}

inputElement.addEventListener('input', getPhonetics);

getPhonetics();
