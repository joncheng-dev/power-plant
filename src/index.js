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
    $("#results").text($("input[name='plant']:checked").val());
  });
  // Soil Buttons
  $("#feed").click(function () {
    plant[i] = stateControl[i](feed);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
    console.log(`plant[0]: ${JSON.stringify(plant[0])}`);
    console.log(`plant[1]: ${JSON.stringify(plant[1])}`);
  });
  $("#blue-food").click(function () {
    plant[i] = stateControl[i](blueFood);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
    console.log(`plant[0]: ${JSON.stringify(plant[0])}`);
    console.log(`plant[1]: ${JSON.stringify(plant[1])}`);
  });
  $("#green-food").click(function () {
    plant[i] = stateControl[i](greenFood);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
    console.log(`plant[0]: ${JSON.stringify(plant[0])}`);
    console.log(`plant[1]: ${JSON.stringify(plant[1])}`);
  });
  $("#yucky-food").click(function () {
    plant[i] = stateControl[i](yuckyFood);
    $("#soil-value").text(`Soil: ${plant[i].soil}`);
    console.log(`plant[0]: ${JSON.stringify(plant[0])}`);
    console.log(`plant[1]: ${JSON.stringify(plant[1])}`);
  });
  // Water Buttons
  $("#hydrate").click(function () {
    plant[i] = stateControl[i](hydrate);
    $("#water-value").text(`Water: ${plant[i].water}`);
    console.log(`plant[0]: ${JSON.stringify(plant[0])}`);
    console.log(`plant[1]: ${JSON.stringify(plant[1])}`);
  });
  $("#super-water").click(function () {
    plant[i] = stateControl[i](superWater);
    $("#water-value").text(`Water: ${plant[i].water}`);
    console.log(`plant[0]: ${JSON.stringify(plant[0])}`);
    console.log(`plant[1]: ${JSON.stringify(plant[1])}`);
  });
  // General Buttons
  // $("#show-state").click(function () {
  //   const currentState = stateControl[i];
  //   $("#soil-value").text(`Soil: ${currentState.soil}`);
  //   $("#water-value").text(`Water: ${currentState.water}`);
  // });
});
