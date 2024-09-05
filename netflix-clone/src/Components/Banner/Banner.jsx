import React from "react";
import axios from "../../utils/axios";
import request from "../../utils/request";

const Banner = () => {
  const [movie, setmovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(request.fetchNetflixOrginals);
        setmovie(
          request.data.results[
            Math.floor(Math.random()) * request.data.results.length
          ]
        );
      } catch (error) {
        console.log("error,error");
      }
    })();
  }, []);
  return (
    <div>
      ClassNme="Banner" style{" "}
      {{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/orginal${movie?.backdrop_path}')`,
        backgroudPostion: "center",
        backroundRepeat: "no-repeat",
      }}
    </div>
  );
};

export default Banner;
