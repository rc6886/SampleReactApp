const toResistor = (significantFigures, multiplier, tolerance) => ({
  significantFigures,
  multiplier: Math.pow(10, multiplier),
  tolerance,
});

export default {
  Black: toResistor(0, 0),
  Brown: toResistor(1, 1, 0.01),
  Red: toResistor(2, 2, 0.02),
  Orange: toResistor(3, 3),
  Yellow: toResistor(4, 4),
  Green: toResistor(5, 5, 0.005),
  Blue: toResistor(6, 6, 0.0025),
  Violet: toResistor(7, 7, 0.001),
  Gray: toResistor(8, 8),
  White: toResistor(9, 9),
  Gold: toResistor(null, -1, 0.05),
  Silver: toResistor(null, -2, 0.1),
  None: toResistor(null, null, 0.2),
};