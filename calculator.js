function calculateNumerology() {
  const name = document.getElementById('name').value.toUpperCase();
  const dobDay = parseInt(document.getElementById('dobDay').value, 10);
  const dobMonth = parseInt(document.getElementById('dobMonth').value, 10);
  const dobYear = parseInt(document.getElementById('dobYear').value, 10);

  const chaldeanResult = calculateChaldeanNumerology(name);
  const pythagoreanResult = calculatePythagoreanNumerology(name);
  const psychicNumber = reduceToSingleDigit(calculateSum(dobDay));
  const destinyNumber = reduceToSingleDigit(calculateSum(dobDay) + calculateSum(dobMonth) + calculateSum(dobYear));

  document.getElementById('chaldeanResult').innerHTML = `Chaldean Numerology: ${chaldeanResult}`;
  document.getElementById('pythagoreanResult').innerHTML = `Pythagorean Numerology: ${pythagoreanResult}`;
  document.getElementById('dobResult').innerHTML = `Psychic Number: ${psychicNumber}, Destiny Number: ${destinyNumber}`;
}

function calculateChaldeanNumerology(name) {
  // Chaldean numerology mapping
  const chaldeanMap = {
      'A': 1, 'I': 1, 'J': 1, 'Q': 1,
      'B': 2, 'K': 2, 'R': 2,
      'C': 3, 'G': 3, 'L': 3, 'S': 3,
      'D': 4, 'M': 4, 'T': 4,
      'E': 5, 'H': 5, 'N': 5, 'X': 5,
      'U': 6, 'V': 6, 'W': 6,
      'O': 7, 'Z': 7,
      'F': 8, 'P': 8,
      'Y': 1,
  };

  let sum = 0;
  for (let i = 0; i < name.length; i++) {
      const char = name.charAt(i);
      if (chaldeanMap[char]) {
          sum += chaldeanMap[char];
      }
  }

  return sum;
}

function calculatePythagoreanNumerology(name) {
  // Pythagorean numerology mapping
  const pythagoreanMap = {
      'A': 1, 'J': 1, 'S': 1,
      'B': 2, 'K': 2, 'T': 2,
      'C': 3, 'L': 3, 'U': 3,
      'D': 4, 'M': 4, 'V': 4,
      'E': 5, 'N': 5, 'W': 5,
      'F': 6, 'O': 6, 'X': 6,
      'G': 7, 'P': 7, 'Y': 7,
      'H': 8, 'Q': 8, 'Z': 8,
      'I': 9, 'R': 9,
  };

  let sum = 0;
  for (let i = 0; i < name.length; i++) {
      const char = name.charAt(i);
      if (pythagoreanMap[char]) {
          sum += pythagoreanMap[char];
      }
  }

  return sum;
}

function calculateSum(value) {
  var sum = 0;
  value.toString().split('').forEach(function (digit) {
    sum += parseInt(digit, 10);
  });
  return sum;
}

function reduceToSingleDigit(number) {
  while (number > 9) {
    number = calculateSum(number);
  }
  return number;
}
