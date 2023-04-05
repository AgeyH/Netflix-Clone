const API_KEY="7c9ff14a12b2d20d6a19f362e90c8154";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top/_eated?api_key${API_KEY}&lanuage=en-US`,
    fetchActionMovies: `/discover/movie?api_key${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key${API_KEY}&with_genres=99`,
}

export default request; 