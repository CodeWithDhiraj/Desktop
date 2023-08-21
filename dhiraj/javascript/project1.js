const accessKey = "cCTHG2M2pxx3K2zr8lFAx3ncyLuvkFs8HpjQg-ye_bc";

const formEl = document.querySelector("form");
const inputE1 = document.getElementById("search_input");
const searchresults= document.querySelector(".search_results");
const showMore = document.getElementById("show-more-button");

let inputData =""; 
let page = 1;

async function searchImages(){
    inputData = inputE1.Value;
    const url = `https ://api.unsplash.com/search/photos?page=${page}&query=$
    {inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
        searchresults.innerHTML = " ";
    }

    results.map((result) =>{
        const imageWrapper = document.creatElement('div');
        imageWrapper.classlist.add("search_results");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.target ="_blank";
        imagelink.textContent = result.alt_description;

        imageWrapper.appendchild(image);
        imageWrapper.appendchild(imagelink);
        searchresults.appendchild(imageWrapper);
        
    });
    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}
formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
});
showMore.addEventListener("click",() =>{
    searchImages();
});
