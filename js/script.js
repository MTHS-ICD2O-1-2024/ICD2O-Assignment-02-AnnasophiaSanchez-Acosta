// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("add-math").innerHTML =
    "<p>The perimeter is: " + (5 + 5 + 5) + " cm</p>"
}

/**
 * This function calculates perimeter of a triangle A.
 */
function calculatePerimeterOfA() {
  // input
  const sideOfA = parseFloat(document.getElementById("side-of-A").value)
  // process (corrected formula)
  const PerimeterOfA = sideOfA + sideOfA + sideOfA

  // output
  document.getElementById("perimeterAAA").innerHTML =
    "Perimeter is: " + PerimeterOfA + "cm"
}
