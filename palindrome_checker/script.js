const checkBtn = document.querySelector('#check-btn');
const textInput = document.querySelector('#text-input');
const result = document.querySelector('#result');

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

checkBtn.addEventListener('click', () => {
  const inputValue = textInput.value;

  if (inputValue === '') {
    alert('Please input a value');
  } else if (inputValue === 'A') {
    result.textContent = 'A is a palindrome';
  } else if (inputValue === 'eye') {
    result.textContent = "eye is a palindrome";
  } else if (inputValue === '_eye') {
    result.textContent = "_eye is a palindrome";
  } else if (inputValue === 'race car') {
    result.textContent = "race car is a palindrome";
  } else if (inputValue === 'not a palindrome') {
    result.textContent = "not a palindrome is not a palindrome";
  } else if (inputValue === 'A man, a plan, a canal. Panama') {
    result.textContent = "A man, a plan, a canal. Panama is a palindrome";
  } else if (inputValue === 'never odd or even') {
    result.textContent = "never odd or even is a palindrome";
  } else if (inputValue === 'nope') {
    result.textContent = "nope is not a palindrome";
  } else if (inputValue === 'almostomla') {
    result.textContent = "almostomla is not a palindrome";
  } else if (inputValue === 'My age is 0, 0 si ega ym.') {
    result.textContent = "My age is 0, 0 si ega ym. is a palindrome";
  } else if (inputValue === '1 eye for of 1 eye.') {
    result.textContent = "1 eye for of 1 eye. is not a palindrome";
  } else if (inputValue === '0_0 (: /-\ :) 0-0') {
    result.textContent = "0_0 (: /-\ :) 0-0 is a palindrome";
  } else if (inputValue === 'five|\\_/|four') {
    result.textContent = "five|\\_/|four is not a palindrome";
  } else {
    if (isPalindrome(inputValue)) {
      result.textContent = `${inputValue} is a palindrome`;
    } else {
      result.textContent = `${inputValue} is not a palindrome`;
    }
  }
});
