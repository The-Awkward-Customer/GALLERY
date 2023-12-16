//make our API call
async function getImages(query) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=6&orientation=landscape&client_id=iOWWvhMHp8ilSlixkY80FRuo8E-fDo3YHBbQ0glIGBc`
  );

  //dotenv
  // turn reponse into json
  const json = await response.json();

  //return the image
  renderImages(json.results);
  console.log(json);
}

const displayImage = document.getElementById("display-image");

function renderImages(data) {
  //remove old images
  document.getElementById("thumbnail-wrapper").innerHTML = "";
  //loop through results and readner an image for item

  for (let i = 0; i < data.length; i++) {
    const imageObj = data[i]; // the image object is the item in the array returned by my for loop

    // Sets the display image to the first image in the array[0]
    if (i === 0) {
      displayImage.src = imageObj.urls.small;
      displayImage.alt = imageObj.alt_description;
    }

    const img = document.createElement("img"); // Declares the ability to create a new "img" element
    img.src = imageObj.urls.full; // Sets the image "src" attribute to the *nth objects via the imgObj url.full pathway
    img.alt = imageObj.alt_description; // Sets the image "alt_description" attribute to the *nth objects via the imgObj .alt pathway
    img.id = "image-" + i; // Assigns an id to the item and appends it with a number
    img.tabIndex = 1;

    // Adds an event listener to the item.
    img.addEventListener("click", function () {
      displayImage.src = img.src;
      displayImage.alt = img.alt;
    });

    document.getElementById("thumbnail-wrapper").appendChild(img);
  }
}

const form = document.getElementById("search");

form.addEventListener("submit", function (event) {
  // the form is automaticaly passed the event as a para which gives us access to:
  event.preventDefault();
  const search = event.target.search.value;
  getImages(search);
});

// regarding clicking logic
const thumbnails = document.querySelectorAll(".thumbnail-wrapper img");

// window.addEventListener("keydown", function () {});

getImages("korea");
