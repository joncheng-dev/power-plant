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
  $("#feed").click(function () {
    const newState = stateControl(blueFood);
    $("#soil-value").text(`Soil: ${newState.soil}`);
  });
  $("#show-state").click(function () {
    const currentState = stateControl();
    $("#soil-value").text(`Soil: ${currentState.soil}`);
  });
});
