
const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

async function loadMovies(searchTerm){
    const URL = `http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=1fd5f2d0`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if (data.Response =="True") displayMoviesList(data.Search);
}
function findMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    loadMovies(searchTerm);
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    }
    else{
        searchList.classList.add('hide-search-list');
    }
}

function displayMoviesList(movies){
    searchList.innerHTML = "";
    for (let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID;
        movieListItem.classList.add('search-list-item');
        movieListItem.innerHTML = `  
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
            <button class ="nominate-button" onclick = "nominateMovies()"> Nominate </button>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }

}

function nominateMovies(){
    alert('yeah')
}



window.addEventListener('click', (event) => {
    if (event.target.ClassName!="form-control"){
        searchList.classList.add('hide-search-list');
    }
});