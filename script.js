// template_6ju90x3
// service_05kzrft
// 9EM7Rf9bCTn2TCrIJ

const contact = (e) => {
  e.preventDefault();
  //   console.log("it worked");
  //   emailjs
  //     .sendForm(
  //       "service_05kzrft",
  //       "template_6ju90x3",
  //       e.target,
  //       "9EM7Rf9bCTn2TCrIJ"
  //     )
  //     .then(() => {
  //       console.log("hey its working");
  //     });
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  setTimeout(() => {
    // console.log("it worked");
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  }, 5000);
};
