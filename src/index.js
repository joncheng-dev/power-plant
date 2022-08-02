import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {
  stateControl,
  feed,
  blueFood,
  greenFood,
  yuckyFood,
  hydrate,
  superWater,
} from "../src/plant.js";

// User Interface Logic
$(document).ready(function () {
  // Soil Buttons
  $("#feed").click(function () {
    const newState = stateControl(feed);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });
  $("#blue-food").click(function () {
    const newState = stateControl(blueFood);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });
  $("#green-food").click(function () {
    const newState = stateControl(greenFood);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });
  $("#yucky-food").click(function () {
    const newState = stateControl(yuckyFood);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });
  // Water Buttons
  $("#hydrate").click(function () {
    const newState = stateControl(hydrate);
    $("#water-value").text(`Water: ${newState.water}`);
  });
  $("#super-water").click(function () {
    const newState = stateControl(superWater);
    $("#water-value").text(`Water: ${newState.water}`);
  });
  // General Buttons
  $("#show-state").click(function () {
    const currentState = stateControl();
    $("#soil-value").text(`Soil: ${currentState.soil}`);
  });
});
