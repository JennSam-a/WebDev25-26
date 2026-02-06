// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
   function calculateArea() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let output = document.getElementById("output");

    if (length <= 0 || width <= 0) {
        output.innerHTML = "Inappropriate measurement";
    } else {
        let area = length * width;
        output.innerHTML = "Area of rectangle: " + area;
    }
}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");

  let image = "";

  if (animal === "Bear" && emotion === "Funny") {
    image = "funnyBear.jpg";
  } 
  else if (animal === "Bear" && emotion === "Sad") {
    image = "sadBear.jpg";
  } 
  else if (animal === "Cat" && emotion === "Funny") {
    image = "funnyCat.jpg";
  } 
  else if (animal === "Cat" && emotion === "Sad") {
    image = "sadCat.jpg";
  } 
  else if (animal === "Dog" && emotion === "Funny") {
    image = "funnyDog.jpg";
  } 
  else if (animal === "Dog" && emotion === "Sad") {
    image = "sadDog.jpg";
  } 
  else {
    output.innerHTML = "<p>select both an animal and a setting.</p>";
    return;
  }

  // Display image
  output.innerHTML = `<img src="${image}" alt="${animal} ${emotion}" width="300">`;
}
