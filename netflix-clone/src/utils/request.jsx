const API_KEY = process.env.REACT_APP_API_KEY;
const request = {
  fetchTrending: `/trending/all/week?API_KEY=&{API_KEY}&language=-Us`,
  fetchNetflixOrginals: `/discover/tv?api_key=&{API_key}&with-networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=&{API_KEY}&language=en-Us`,
  fetchActionMovies: `/discover/movie?api_key=&{API_KEY}&with-genres=28`,
  fetchComedyMOvies: `/discover/movie?api_key=&{API_KE}&with-genres=35`,
  fetchHorrowMovies: `/discover/movie?api_key=&{API_KEY}&with-genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=&{API_KEY}&with-genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=&{API_KEY}&with-genres=99`,
  fetchTvShow: `tv/popular?api_key=&{API_KEY}&language=en-Us&page=1`,
};
