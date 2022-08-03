// Business logic
export { stateControl, plant };
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

// Stores updated states of plants
const plant = [];
plant[0] = {};
plant[1] = {};

// Stores a state for specific plants
const stateControl = [];
stateControl[0] = storeState(plant[0]);
stateControl[1] = storeState(plant[1]);

// Watering
const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

// Add Soil
const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);

// // Experiment with passing in different empty objects to storeState.
// plant[0] = stateControl[0](hydrate);
// plant[1] = stateControl[1](superWater);

// // This modifies the first plant a second time.
// plant[0] = stateControl[0](blueFood);
