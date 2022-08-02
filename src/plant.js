// Business logic
export { stateControl };
export { feed, blueFood, greenFood, yuckyFood };
export { hydrate, superWater };

const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// Function to add soil, light, water to plant
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

// Stores updated state
const plantOne = {};
const plantTwo = {};
const stateControl = storeState();
const stateControlOne = storeState(plantOne);
const stateControlTwo = storeState(plantTwo);

// Watering
const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

// Add Soil
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

// Experiment with passing in different empty objects to storeState.
const newStateOne = stateControlOne(hydrate);
const newStateTwo = stateControlTwo(superWater);
