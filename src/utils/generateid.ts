export function generateRandomHash() {
  const parts = [];
  for (let i = 0; i < 5; i++) {
    let part = '';
    for (let j = 0; j < 5; j++) {
      const ascii = Math.floor(Math.random() * 62);
      if (ascii < 10) part += ascii; // numeric (0-9)
      else if (ascii < 36)
        part += String.fromCharCode(ascii + 55); // uppercase letters (A-Z)
      else part += String.fromCharCode(ascii + 61); // lowercase letters (a-z)
    }
    parts.push(part);
  }
  return parts.join('');
}
