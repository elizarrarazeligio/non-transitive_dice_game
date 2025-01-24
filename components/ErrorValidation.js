class ErrorValidation {
  handle(arr, sel, message) {
    try {
      if (arr.includes(sel)) return true;
      throw "Not a valid option, try again...";
    } catch (error) {
      if (sel != "?") console.log(error);
    }
  }
}

module.exports = ErrorValidation;
