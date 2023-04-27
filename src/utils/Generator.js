export function generateAlphanumericArray(length) {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz?!%$^&*(#";
  const result = [];

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result.push(chars[randomIndex]);
  }

  return result;
}

export function getRandomCharacter() {
  return generateAlphanumericArray(1);
}
