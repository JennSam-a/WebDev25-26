// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
function average() {
    let g1 = Number(document.getElementById("grade1").value);
    let g2 = Number(document.getElementById("grade2").value);
    let g3 = Number(document.getElementById("grade3").value);
    
    let avg = (g1 + g2 + g3) / 3;

    document.getElementById("output").innerHTML =
        "Average Grade: " + avg.toFixed(2);
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.