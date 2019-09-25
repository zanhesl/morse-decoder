const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const SPACE_SYMBOL = `**********`;

function decode(expr) {
  return expr.split(SPACE_SYMBOL) //splitting to words
    .map((element) => {
      let code = ``;
      for (let i = 0; i < Math.floor((element.length / 10)); i++) {
        let letter = element.slice(i * 10, (i * 10) + 10);
        let morseCodeLetter = ``;
        for (let i = 0; i < letter.length; i += 2) {
          switch (letter.slice(i, i + 2)) {
            case (`00`):
              break;
            case (`10`):
              morseCodeLetter += `.`;
              break;
            case (`11`):
              morseCodeLetter += `-`;
              break;
          }
        }
        code += MORSE_TABLE[morseCodeLetter];
      }

      return code;
    })
    .join(` `);
}

module.exports = {
  decode
}
