// Adding Image Search API from Unsplash.com

const accessKey = "2wURIsdRxIuyIg_05Zl_vGttnVMkHoQUi09iAxg8RVY";

// Create variables for excecute the functions

const formeEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const serachResults = document.querySelector(".Search-results");
const showMore = document.getElementById("show-more-button");

// Created variable for user input-data
let inputData = "";
let page = 1;

//Function for search image

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  // Data variable holidng the all the json format all then jason data now we need
  const response = await fetch(url);
  const data = await response.jason();

  // convert jason data into images

 const results = data.results
 if (page === 1){
  serachResults.innerHTML = ""
 }
results.map((results) =>{
  const Imageapper = document.createElement('div')
  Imageapper.classList.add("search-result")
  const  image = document.createElement('imgs')
  image.src = result.urls.small
  image.alt =result.alt.description
  const imageLink = document.createElement('a')
}
)
}
