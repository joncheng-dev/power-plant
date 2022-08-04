import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import {
  stateControl,
  plant,
  feed,
  blueFood,
  greenFood,
  yuckyFood,
  hydrate,
  superWater,
} from "../src/plant.js";

// User Interface Logic
$(document).ready(function () {
  // Plant Select
  let i = 0;
  $("input[name='plant']").change(function () {
    i = $("input[name='plant']:checked").val();
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
    $("#water-value").text(`Water: ${plant[i].water}`);
  });
  // Soil Buttons
  $("#feed").click(function () {
    plant[i] = stateControl[i](feed);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
  });
  $("#blue-food").click(function () {
    plant[i] = stateControl[i](blueFood);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
  });
  $("#green-food").click(function () {
    plant[i] = stateControl[i](greenFood);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
  });
  $("#yucky-food").click(function () {
    plant[i] = stateControl[i](yuckyFood);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
  });
  // Water Buttons
  $("#hydrate").click(function () {
    plant[i] = stateControl[i](hydrate);
    $("#water-value").text(`Water: ${plant[i].water}`);
  });
  $("#super-water").click(function () {
    plant[i] = stateControl[i](superWater);
    $("#water-value").text(`Water: ${plant[i].water}`);
  });
  // General Buttons
  $("#show-state").click(function () {
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
    $("#water-value").text(`Water: ${plant[i].water}`);
  });
});
