//const rectangle = require('../js/rectangle');
import {getRectanglePerimeter, getRectangleArea, getRectangleInfo} from "../js/rectangle"

test('perimeter of rectangle', () => {
  expect(getRectanglePerimeter(2, 4)).toBe(12);
});

test('area of rectangle', () => {
    expect(getRectangleArea(2, 4)).toBe(8);
  });

test('info of rectangle contain string with info', () => {
    expect(getRectangleInfo(2, 4)).toBe(console.log(`The perimeter of a rectangle is 12 and the area is 8`));
  });