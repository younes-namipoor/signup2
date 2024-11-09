const signin = document.querySelector("#signin");
const move = document.querySelector("#move");
const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const inpuser = document.querySelector("#user");
const check1 = document.querySelector(".bi-check2");
const check2 = document.querySelector(".check2");
const inpEmail = document.querySelector("#email");
const check3 = document.querySelector(".check3");
const inpass = document.querySelector("#pass");
const eye = document.querySelector(".bi-eye-fill");
const pass2 = document.querySelector("#pass2");
const email2 = document.querySelector("#email2");
const footer = document.querySelector('#footer')
const fig = document.querySelector('#fig')
let flag = 1;
signin.addEventListener("click", () => {
  if (flag % 2) {
    move.style.left = "50%";
    text1.innerHTML;
    text1.innerHTML = "Hello, Friend!";
    text2.innerHTML;
    text2.innerHTML = "Enter your personal details and start journey with us";
    signin.innerHTML;
    signin.innerHTML = "Sign Up";
  } else {
    move.style.left = "0";
    text1.innerHTML;
    text1.innerHTML = "Welcome Back!";
    text2.innerHTML;
    text2.innerHTML =
      "To keep connected with us please login with your personal info";
    signin.innerHTML;
    signin.innerHTML = "Sign IN";
  }
  flag++;
});
inpuser.addEventListener("input", (e) => {
  const uservalue = inpuser.value;

  if (uservalue.search(/[a-z0-9_-]/) >= 0) {
    if (uservalue.search(/[ا-ی]/) >= 0) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }

    if (uservalue.length > 5) {
      check1.style.opacity = "1";
    } else if (uservalue.length <= 5) {
      check1.style.opacity = "0";
    }
  } else {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  }
});
inpEmail.addEventListener("input", (e) => {
  const userEmail = inpEmail.value;

  if (e.target.value.search(/[a-z0-9@._-]/) >= 0) {
    if (userEmail.search(/[ا-ی]/) >= 0) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }

    if (userEmail.search(/[@]/) >= 0 && userEmail.search(/[.]/) >= 0) {
      console.log(inpEmail);

      check2.style.opacity = "1";
    } else if (userEmail.search(/[.]/) == -1) {
      check2.style.opacity = "0";
    }
  } else {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  }
});
inpass.addEventListener("input", (e) => {
  const userPass = inpass.value;
  if (userPass.search(/[a-z0-9]/) >= 0) {
    if (userPass.search(/[ا-ی]/) >= 0) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
    if (
      userPass.search(/[A-Z]/) >= 0 &&
      userPass.search(/[0-9]/) >= 0 &&
      userPass.search(/[!@#$%^&*]/) >= 0 &&
      userPass.length >= 8
    ) {
      check3.style.opacity = "1";
    } else {
      check3.style.opacity = "0";
    }
  } else {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  }
});
num = 1;
eye.addEventListener("click", () => {
  if (num % 2) {
    eye.classList.add("bi-eye-slash-fill");
    eye.classList.remove("bi-eye-fill");
    inpass.getAttribute("type", "password");
    inpass.setAttribute("type", "text");
  } else {
    eye.classList.remove("bi-eye-slash-fill");
    eye.classList.add("bi-eye-fill");
    inpass.setAttribute("type", "password");
    inpass.getAttribute("type", "text");
  }
  num++;
});
email2.addEventListener("input", (e) => {
  const userEmail = email2.value;
  if (e.target.value.search(/[a-z0-9@._-]/) >= 0) {
    if (userEmail.search(/[ا-ی]/) >= 0) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }

    if (userEmail.search(/[@]/) >= 0 && userEmail.search(/[.]/) >= 0) {
      console.log(inpEmail);

      check2.style.opacity = "1";
    } else if (userEmail.search(/[.]/) == -1) {
      check2.style.opacity = "0";
    }
  } else {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  }
});
pass2.addEventListener("input", (e) => {
  const userPass = pass2.value;
  if (userPass.search(/[a-z0-9]/) >= 0) {
    if (userPass.search(/[ا-ی]/) >= 0) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }
    if (
      userPass.search(/[A-Z]/) >= 0 &&
      userPass.search(/[0-9]/) >= 0 &&
      userPass.search(/[!@#$%^&*]/) >= 0 &&
      userPass.length >= 8
    ) {
      check3.style.opacity = "1";
    } else {
      check3.style.opacity = "0";
    }
  } else {
    e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  }
});


footer.addEventListener('click' , ()=>{
    fig.classList.toggle('high')
})