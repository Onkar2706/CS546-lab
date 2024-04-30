$(document).ready(function () {
  const searchForm = $("#searchMovieForm");
  const searchResults = $("#searchResults");
  const movieDetails = $("#movieDetails");
  const rootLink = $("#rootLink");

  searchForm.submit(function (event) {
    event.preventDefault();
    const searchTerm = $("#movie_search_term").val().trim();
    if (searchTerm === "") {
      alert("Please enter a search term");
      return;
    }
    fetchMovies(searchTerm);
  });

  searchResults.on("click", "a", function (event) {
    event.preventDefault();
    searchResults.hide();
    movieDetails.empty();

    const movieId = $(this).data("id");

    fetchMovieDetails(movieId);
  });

  rootLink.click(function (event) {
    location.reload();
  });

  function fetchMovies(searchTerm) {
    const apiKey = "CS546";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {
        displaySearchResults(data.Search);
      },
      error: function (error) {
        console.error("Error fetching movies:", error);
      },
    });
  }

  function displaySearchResults(movies) {
    searchResults.empty().hide();
    movies.forEach((movie) => {
      const li = $("<li>");
      const a = $("<a>")
        .attr("href", "javascript:void(0)")
        .attr("data-id", movie.imdbID)
        .text(movie.Title);
      li.append(a);
      searchResults.append(li);
    });
    searchResults.show();
    movieDetails.hide();
    rootLink.show();
  }

  function fetchMovieDetails(movieId) {
    const apiKey = "CS546";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`;
    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {
        displayMovieDetails(data);
      },
      error: function (error) {
        console.error("Error fetching movie details:", error);
      },
    });
  }

  function displayMovieDetails(movie) {
    const html = `
        <article>
          <h1>${movie.Title}</h1>
          <img src="${
            movie.Poster !== "N/A" ? movie.Poster : "no_image.jpeg"
          }" alt="${movie.Title} Poster">
  
          <h2>Plot</h2>
          <p>${movie.Plot !== "N/A" ? movie.Plot : "Plot not available"}</p>
          
          <section>
            <h3>Info</h3>
            <dl>
              <dt>Year Released:</dt>
              <dd>${movie.Year !== "N/A" ? movie.Year : "N/A"}</dd>
              <dt>Rated:</dt>
              <dd>${movie.Rated !== "N/A" ? movie.Rated : "N/A"}</dd>
              <dt>Runtime:</dt>
              <dd>${movie.Runtime !== "N/A" ? movie.Runtime : "N/A"}</dd>
              <dt>Genre(s):</dt>
              <dd>${movie.Genre !== "N/A" ? movie.Genre : "N/A"}</dd>
              <dt>Box Office Earnings:</dt>
              <dd>${movie.BoxOffice !== "N/A" ? movie.BoxOffice : "N/A"}</dd>
              <dt>DVD Release Date:</dt>
              <dd>${movie.DVD !== "N/A" ? movie.DVD : "N/A"}</dd>
            </dl>
          </section>
          
          <section>
            <h4>Cast and Crew</h4>
            <p><strong>Director:</strong> ${
              movie.Director !== "N/A" ? movie.Director : "N/A"
            }</p>
            <p><strong>Writer:</strong> ${
              movie.Writer !== "N/A" ? movie.Writer : "N/A"
            }</p>
            <p><strong>Cast:</strong> ${
              movie.Actors !== "N/A" ? movie.Actors : "N/A"
            }</p>
          </section>
          
          <section>
            <h4>Ratings</h4>
            <table class="my_coolratings_table">
              <tr>
                <th>Source</th>
                <th>Rating</th>
              </tr>
              ${movie.Ratings.map(
                (rating) => `
                <tr>
                  <td>${rating.Source}</td>
                  <td>${rating.Value}</td>
                </tr>
              `
              ).join("")}
            </table>
          </section>
        </article>
      `;
    movieDetails.html(html).show();
    searchResults.hide();
    rootLink.show();
  }
});
