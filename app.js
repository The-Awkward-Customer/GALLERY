console.log("hello");

//make our API call
async function getImages(query) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&client_id=iOWWvhMHp8ilSlixkY80FRuo8E-fDo3YHBbQ0glIGBc`
  );

  //dotenv
  // turn reponse into json
  const json = await response.json();

  //   return the image
  renderImages(json.results);
  console.log(json);
}

function renderImages(data) {
  //remove old images
  document.getElementById("newImages").innerHTML = "";
  //loop through results and readner an image for item
  data.forEach(function (imageObj) {
    //create new img tag
    const img = document.createElement("img");
    img.src = imageObj.urls.full;
    img.alt = imageObj.alt_description;
    // set the src of the img tag
    //append a new image tag

    document.getElementById("newImages").appendChild(img);
  });
}

const form = document.getElementById("searchForm");
console.log(form);

form.addEventListener("submit", function (event) {
  // the form is automaticaly passed the event as a para which gives us access to:
  event.preventDefault();
  const search = event.target.search.value;
  getImages(search);
});

getImages("korea");

// CLICKING LOGIC
// const thumbnails = document.querySelectorAll(".gallery-wrapper img");
// console.log(thumbnails);
// const displayImage = document.getElementById("smallImg");
// console.log(displayImage);

// thumbnails.forEach(function (thumb) {
//   thumb.addEventListener("click", function () {
//     displayImage.src = thumb.src;
//     displayImage.alt = thumb.alt;
//   });
// });

// use the resonse

//  how arrays works
// const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach(function (item) {
//   console.log(item);
// });

// arr.forEach(function (item, index) {
//   console.log(item, index);
// });
