import React from "react";

const instance = axios.create({
  baseurl: "https://api.themoviedb.org/3/",
});

export default instance;
