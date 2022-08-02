import {
  stateControl,
  feed,
  blueFood,
  greenFood,
  yuckyFood,
} from "../src/plant.js";

// How do I know save state has worked?
// -- Clicking button gives added value.

// Clicking show state button shows current status

// How do I make a new plant?

describe("stateControl and object property modification functions (affecting soil) -- which uses storeState and changeState", () => {
  test("should call stateControl, which passes in blueFood (soil +5) -- changing the state of an object by a specific property and value, and then store the state change", () => {
    expect(stateControl(blueFood)).toEqual({ soil: 5 });
  });
  test("should call stateControl, which passes in greenFood (soil +10) -- changing the state of an object by a specific property and value, and then store the state change", () => {
    expect(stateControl(greenFood)).toEqual({ soil: 15 });
  });
  test("should call stateControl, which passes in yuckyFood (soil -5) -- changing the state of an object by a specific property and value, and then store the state change", () => {
    expect(stateControl(yuckyFood)).toEqual({ soil: 10 });
  });
  test("should call stateControl, which passes in feed (soil +1) -- changing the state of an object by a specific property and value, and then store the state change", () => {
    expect(stateControl(feed)).toEqual({ soil: 11 });
  });
});
