/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea() {
  let len = parseFloat(document.getElementById("l").value);
  let wid = parseFloat(document.getElementById("w").value);

  let area = len * wid;

  document.getElementById("output").innerHTML =
    "Rectangle Area = " + area;
}

function recPerimeter() {
  let len = parseFloat(document.getElementById("l").value);
  let wid = parseFloat(document.getElementById("w").value);

  let perimeter = 2 * (len + wid);

  document.getElementById("output").innerHTML =
    "Rectangle Perimeter = " + perimeter;
}



/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea() {
  let r = parseFloat(document.getElementById("r").value);

  let area = pi * r * r;

  document.getElementById("output").innerHTML =
    "Circle Area = " + area.toFixed(2);
}

function cirPerimeter() {
  let r = parseFloat(document.getElementById("r").value);

  let circumference = 2 * pi * r;

  document.getElementById("output").innerHTML =
    "Circle Circumference = " + circumference.toFixed(2);
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}