const ftoc = function(f) {
  // (F - 32) / 1.8 = C
  return Number(((f - 32) / 1.8).toFixed(1));
}

const ctof = function(c) {
  // (C * 1.8) + 32 = F
  return Number(((c * 1.8) + 32).toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
