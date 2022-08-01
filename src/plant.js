// Business logic
export { stateControl, blueFood };

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = (state) => state) => {
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

const stateControl = storeState();

const feed = changeState("soil")(1);
const hydrate = changeState("water")(1);
const blueFood = changeState("soil")(5);
const superWater = changeState("water")(5);
