// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function average() {
    let g1 = Number(document.getElementById("grade1").value);
    let g2 = Number(document.getElementById("grade2").value);
    let g3 = Number(document.getElementById("grade3").value);
    let avg = (g1 + g2 + g3) / 3;
    
    document.getElementById("output").innerHTML = avg;
}


// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function slope() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let result = (y2 - y1) / (x2 - x1);

    document.getElementById("slopeOutput").innerHTML = result;
}


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function bmi() {
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    let result = weight / (height * height);

    document.getElementById("bmiOutput").innerHTML = result;
}
