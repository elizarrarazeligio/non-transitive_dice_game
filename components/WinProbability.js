class WinProbability {
  countWins(d1, d2) {
    let c = 0;
    let t = 0;
    for (let i = 0; i < d1.length; i++) {
      for (let j = 0; j < d2.length; j++) {
        d1[i] > d2[j] && c++;
        t++;
      }
    }
    return (c / t).toFixed(4);
  }
}

module.exports = WinProbability;
