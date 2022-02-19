const isInView = document.querySelectorAll(".animate__animated");

const elementInView = (el, divideBy = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / divideBy
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element, zems) => {
  element.classList.add(zems);
};

const hideScrollElement = (element, zems) => {
  element.classList.remove(zems);
};

const handleScrollAnimation = () => {
  isInView.forEach((el) => {
    zems = el.getAttribute("data-zems")
    if (elementInView(el, 1.25)) {      
      if(zems != null){
        displayScrollElement(el, zems);
      }
    } else if (elementOutofView(el)) {
      if(zems != null){
        hideScrollElement(el, zems);
      }      
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});