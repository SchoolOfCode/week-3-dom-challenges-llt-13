/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!


// grab star icon
// grab the slider
// write a function to create new span element with the "★"
// add event listener that listens for slider value
// paste star in star div - append as child to "stars" div

/*
let starIcon = document.getElementsByClassName("star-icon");

let slider = document.getElementById("starSlider");

const starEmoji = document.createElement("span");
starEmoji.innerText = "★";

let starDiv = document.getElementById("stars");

function changeStars(){
  for (let i = 1; i < slider.value; i++) {document.getElementById("stars").appendChild(starEmoji);}
  console.log(slider.value)
};

slider.addEventListener("input", changeStars);
*/

//-------------------------------------------------------------------------------------------------------------------

// let starIcon = document.getElementsByClassName("star-icon");  RETURNS COLLECTION OF ELEMENTS
let starIcon = document.querySelector(".star-icon"); // RETURNS A SINGLE ELEMENT


let slider = document.getElementById("starSlider");

let starDiv = document.getElementById("stars");

function changeStars() {
  starDiv.textContent = ""
  let numberOfStars = slider.value;
  for (let i = 0; i < numberOfStars; i++) {
    starDiv.appendChild(starIcon.cloneNode(true));
  }
  console.log(numberOfStars);
}
// HELPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
slider.addEventListener("input", changeStars);