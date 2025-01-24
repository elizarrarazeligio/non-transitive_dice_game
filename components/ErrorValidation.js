class ErrorValidation {
  initialInput(arr) {
    try {
      if (arr.length < 2) throw "Not enough dices to play.";
      if (!arr.flat().every((i) => !isNaN(parseInt(i))))
        throw "Do not enter non-integer values.";
      if (!arr.reduce((prev, curr) => prev.length == curr.length))
        throw "Not all dices have the same number of faces.";
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
