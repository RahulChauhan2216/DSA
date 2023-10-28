let key = "the quick brown fox jumps over the lazy dog",
  message = "vkbs bs t suepuv";

var decodeMessage = function (key, message) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const obj = {};

  let alphIndex = 0;

  for (let i = 0; i < key.length; i++) {
    if (key[i] === " " || obj[key[i]]) {
      continue;
    } else {
      obj[key[i]] = alphabet[alphIndex];
      alphIndex++;

      if (alphIndex === 27) {
        break;
      }
    }
  }

  let decoded = "";
  for (let index = 0; index < message.length; index++) {
    const letter = message[index];

    if (letter === " ") {
      decoded += " ";
    } else {
      decoded += obj[letter];
    }
  }

  return decoded;
};

console.log(decodeMessage(key, message));
