class ErrorValidation {
  initialInput(arr) {
    try {
      if (arr.length < 2) throw "Not enough dices to play.";
    } catch (error) {
      console.log(error);
      process.exit();
    }
  }

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
