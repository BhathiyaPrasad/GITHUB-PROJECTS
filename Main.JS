const accessKey = "2wURIsdRxIuyIg_05Zl_vGttnVMkHoQUi09iAxg8RVY"

const formeEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const serachResults = document.querySelector(".Search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1 ;

async function searchImages (){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`


    const response = await fetch(url)
    const data = await response.jason()

    
}