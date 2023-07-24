// template_6ju90x3
// service_05kzrft
// 9EM7Rf9bCTn2TCrIJ

const scaleFactor = 1 / 20;

const moveBackground = (e) => {
  const shape = document.querySelectorAll(".shape");
  const x = e.clientX * scaleFactor;
  const y = e.clientY * scaleFactor;
  //   console.log(x, y);

  //   shape.forEach((item, index) => {
  //     item[index].style.transform = `translate(10%,10%)`;
  //   });
  for (let i = 0; i < shape.length; i++) {
    const isOdd = i % 2 !== 0;
    // console.log(isOdd);
    const boolInt = isOdd ? -1 : 1;
    shape[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`;
  }
};

const contact = (e) => {
  e.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  console.log("it worked");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_05kzrft",
      "template_6ju90x3",
      e.target,
      "9EM7Rf9bCTn2TCrIJ"
    )
    .then(() => {
      //   throw new Error("hey this is error!!!!");
      // console.log("hey its working");
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch((err) => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporary unavailable..please try again later"
      );
    });
};

const toggleModal = () => {
  //   if (isModalOpen) {
  //     document.body.classList.remove("modal__open");
  //   } else {
  //     isModalOpen = false;
  //     document.body.classList += " .modal__open";
  //   }
  document.body.classList.toggle("modal__open");
};

let contrastToggle = false;
const toggleContrast = () => {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
};
