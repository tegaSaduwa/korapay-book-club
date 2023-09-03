

// suggestive search functionality
const searchBtn  = document.getElementById("autocomplete");
const outputList = document.getElementById("searchResults");

const searchedResults = (e) => {
  e.preventDefault();
  let searchText = !!e ? e.target.value : '';
  if (searchText.length == 0) {
    outputList.innerHTML = '';
    e.stopPropagation();
    return;
  }
  
const filteredBooks = books.filter(value => value.title.toLowerCase().includes(searchText.toLowerCase()));
let listEl = '';
for (const book of filteredBooks) {
  listEl += `<li onclick="selectValue(event)"> ${book.title} - ${book.author}</li>`;
}
outputList.innerHTML = listEl;
}

searchBtn.addEventListener('input', searchedResults);

const selectValue = (e) => {
  searchBtn.value = e.target.textContent.trim();
}




// mapping through each card in the carousel
function showDetails() {
  document.getElementById("overlay").style.display = "block";
}

function closeDetails() {
  document.getElementById("overlay").style.display = "none";
}

let carousel = document.querySelector(".carousel");
let carouselCells = books
  .map((book) => {
    return ` <div>
                <div  class="carousel-cell" style="background-image: url(${book.image})" onclick="showDetails()">       
                </div>
                <div class="overlay" id="overlay" onclick="closeDetails()">
                  <div id="text">(${book.title}</div>
                </div>
            </div>
            `;
  })
  .join("");
carousel.innerHTML = carouselCells;



// get recently added books
let recentlyAdded = document.querySelector(".recently-added");
let eachRecentlyAdded = books
  .map((book) => {
    return `  <div class="column">
            <object data="${book.imageWithDescriptionCard}"> </object>
            </div>
            `;
  })
  .slice(0, 5)
  .join("");
recentlyAdded.innerHTML = eachRecentlyAdded;


// get all books
let bookAllBooks = document.querySelector(".all-books");
let eachBook = books
  .map((book) => {
    return `  <div class="column">
            <object data="${book.imageWithDescriptionCard}"> </object>
            </div>
            `;
  })
  .join("");
bookAllBooks.innerHTML = eachBook;




// mobile view code 

// to open navigation for sidebar on mobile view
const openNav = () => {
  document.getElementById("sidebarNav").style.width = "250px";
  
}

//// to close navigation for sidebar on mobile view
const closeNav = () => {
  document.getElementById("sidebarNav").style.width = "0";
}


//// to show searchbar  mobile view

const showSearch = () => {
  document.querySelector(".navbar__items").style.display = "none";
  document.querySelector("#search--mobile").style.display = "none";
  document.querySelector("#navMenu").style.display = "none";
  document.querySelector(".navbar__brand").style.display = "none";
  document.querySelector(".navbar__search--mobile .back_btn").style.display = "flex";
  document.querySelector(".navbar__search--mobile .input").style.display = "flex";
  document.querySelector(".navbar__search--mobile .btn").style.display = "flex";
  document.querySelector(".navbar__search--mobile").style.display = "flex";
}


const removeSearch = () => {
  document.querySelector(".navbar__items").style.display = "flex";
  document.querySelector("#search--mobile").style.display = "flex";
  document.querySelector("#navMenu").style.display = "flex";
  document.querySelector(".navbar__brand").style.display = "flex";
  document.querySelector(".navbar__search--mobile .back_btn").style.display = "none";
  document.querySelector(".navbar__search--mobile .input").style.display = "none";
  document.querySelector(".navbar__search--mobile .btn").style.display = "none";
  document.querySelector(".navbar__search--mobile").style.display = "none";
}

