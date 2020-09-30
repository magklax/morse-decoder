const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let char = '';
  let result = '';
  
  for (let i = 0; i < expr.length / 10; i++) {
    char = expr.slice(i * 10, (i  + 1) * 10).replace(/^[0]+/g, '');

    char = char.replace(/10/g, '.').replace(/11/g, '-').replace(/[\*]+/g, ' ');

    if (char === ' ') {
      result += char;
    } else {
      result += MORSE_TABLE[char];
    }
  }
  return result;
}

module.exports = {
    decode
}