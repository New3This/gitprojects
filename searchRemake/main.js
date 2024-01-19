const url = "PP9jz3KzvMvbPdai7JuiUcvpVpism4juuXwIV8i_BSY";
let searchResults = document.getElementById("search-results");
let msg = document.getElementById("searchbar");
let ShowMore = document.getElementById("ShowMore");
let currentPage = 0;

async function fetchData(query) {
  fetch(`https://api.unsplash.com/search/photos?page=${currentPage}&query=${query}&client_id=${url}`)
  .then(response => response.json())
  .then(data => {
    // Handle the data (e.g., display the photo)
    console.log(data);
    data.results.forEach(element => {
      let searchResult = document.createElement('div');
      searchResult.className = "search-result"
  
      let image = document.createElement('img');
      image.src = element.urls.small;
      image.alt = element.alt_description;
  
      let searchDescription = document.createElement('a');
      searchDescription.className = "searched-description";
      searchDescription.href = element.urls.small;
      searchDescription.target = "_blank";
      searchDescription.textContent = element.alt_description;
  
      searchResult.appendChild(image);
      searchResult.appendChild(searchDescription);
      searchResults.appendChild(searchResult);

      if (currentPage < data.total_pages) {
        ShowMore.style.display = "block";
        currentPage++;
      }
    });

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}



document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  query = msg.value;
  searchResults.innerHTML = "";
  fetchData(query);
  responseMsg();

});

document.getElementById("ShowMore").addEventListener("click", () => {
  query = msg.value;
  fetchData(query);
  setTimeout
});


function responseMsg() {
  let toastItem = document.createElement('div');
  toastItem.classList.add('toast-item');
  toastItem.innerHTML = `<i class="fas fa-check"></i>Success!`;
  document.getElementById("toast").appendChild(toastItem);

  setTimeout(()=> {
    toastItem.remove();
  }, 5000)
}