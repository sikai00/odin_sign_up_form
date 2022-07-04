// Wrong inputs highlight
const signUpInputs = document.querySelectorAll(".sign-up-form > div > input")
signUpInputs.forEach(input => 
  input.addEventListener(
    "invalid", 
    e => {
      input.classList.add("error")
    }));


// Password and confirm password equal check
function checkPassword(e) {
  const signUpPassword = document.querySelector("#password");
  const signUpCfmPassword = document.querySelector("#cfm-password");
  const passwordErrorMsg = document.querySelector(".password-error");
  if (signUpPassword.value != signUpCfmPassword.value) {
    // passwordErrorMsg.textContent = "* Passwords do not match";
    signUpPassword.setCustomValidity("Passwords do not match");
    signUpCfmPassword.setCustomValidity("Passwords do not match");
  } else {
    signUpPassword.setCustomValidity("");
    signUpCfmPassword.setCustomValidity("");
    signUpPassword.classList.remove("error");
    signUpCfmPassword.classList.remove("error");
  }
}
document.querySelector("#password").addEventListener(
  "input", e => checkPassword(e));
document.querySelector("#cfm-password").addEventListener(
  "input", e => checkPassword(e));

document.querySelector("input[type=submit").addEventListener(
  "click", e => signUpInputs.forEach(input => input.classList.remove("error"))
);