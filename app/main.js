import "./style.css";

import { dogCeo } from "./utils/dogApi";

document.querySelector("#app").innerHTML = `
<h1>DOG API PROJECT</h1>
<div class="selectionDiv">
<label for="dogBreed">Choose your Dog: </label>
<select name="selectDogBreed" id="selectDogBreed">
  <option selected disabled>dog breeds</option>
</select>
</div>
<button id="imageBtn">Fetch dog image</button>
<div id = "loading-indicator"></div> 
<div id="imageDiv">
<img  />
</div>`;

// printDogs();
async function start() {
  try {
    const res = await dogCeo.fetchDogBreedNames();
    console.log(res.data.message);
    const selectedDog = Object.keys(res.data.message);
    console.log(selectedDog);
    addOption(selectedDog);
  } catch (error) {
    console.log(error);
  }
}

async function fetchImage(dogName) {
  try {
    if (dogName == "dog breeds") {
      document.querySelector("#loading-indicator").textContent =
        "select dog breed";
    } else {
      document.querySelector("#loading-indicator").textContent = "Loading...";
      const res = await dogCeo.fetchRandomDogImage(dogName);
      console.log(res.data.message);
      const dogImageUrl = res.data.message;
      displayDogImage(dogImageUrl);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayDogImage(img) {
  const imgBox = document.querySelector("#imageDiv img");
  imgBox.src = img;
  document.querySelector("#loading-indicator").textContent = "";
}

function addOption(selectDog) {
  const dropDownList = document.querySelector("#selectDogBreed");
  for (let i = 0; i < selectDog.length; i++) {
    let dogName = selectDog[i];
    const option = document.createElement("option");
    option.value = `${dogName}`;
    option.innerText = `${dogName}`;
    dropDownList.append(option);
  }
}

start();

const imgBtn = document.querySelector("#imageBtn");
imgBtn.addEventListener("click", function () {
  const selectedDog = document.querySelector("#selectDogBreed").value;
  fetchImage(selectedDog);
});
