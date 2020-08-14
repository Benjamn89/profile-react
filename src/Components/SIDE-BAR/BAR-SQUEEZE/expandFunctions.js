const expandFunctions = () => {
  document
    .querySelector(".squeeze-titles-div")
    .classList.toggle("squeeze-titles-move");
  document.querySelector(".squeeze-titles-p").classList.toggle("add-opacity-p");
  document
    .querySelector(".squeeze-line-div")
    .classList.toggle("squeeze-rotate");
  document.querySelector(".s-i-f").classList.toggle("r-i-f");
  document.querySelector(".s-i-s").classList.toggle("r-i-s");
  document.querySelector(".s-i-t").classList.toggle("r-i-t");
};

export default expandFunctions;
