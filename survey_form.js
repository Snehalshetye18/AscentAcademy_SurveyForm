function validateEmail(email) {
    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  // Example usage:
  const emailInput = document.getElementById('email-input');
  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address!');
  }
// Example: Limit the number of characters in a textarea field
const maxChars = 100;
const textarea = document.getElementById('textarea-field');
textarea.addEventListener('input', () => {
  const charsLeft = maxChars - textarea.value.length;
  const charsLeftMsg = `${charsLeft} characters left`;
  const charsLeftEl = document.getElementById('chars-left');
  charsLeftEl.innerText = charsLeftMsg;
  if (charsLeft < 0) {
    textarea.value = textarea.value.slice(0, maxChars);
    charsLeftEl.innerText = '0 characters left';
  }
});
  