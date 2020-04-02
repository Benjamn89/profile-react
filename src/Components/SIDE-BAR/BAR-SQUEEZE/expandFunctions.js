import $ from "jquery";

const expandFunctions = () => {
  $(".squeeze-titles-div").toggleClass("squeeze-titles-move");
  $(".squeeze-titles-p").toggleClass("add-opacity-p");
  $(".squeeze-line-div").toggleClass("squeeze-rotate");
  $(".s-i-f").toggleClass("r-i-f");
  $(".s-i-s").toggleClass("r-i-s");
  $(".s-i-t").toggleClass("r-i-t");
};

export default expandFunctions;
