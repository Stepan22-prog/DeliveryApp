const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PHONE_PATTERN = /^[0-9\-\+]{9,15}$/;

export function validateEmail(email) {
  return EMAIL_PATTERN.test(email);
}

export function validatePhone(phone) {
  return PHONE_PATTERN.test(phone);
}