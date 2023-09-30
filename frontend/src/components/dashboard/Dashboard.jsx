import { useEffect, useState } from "react";
import "./dashboard.css";
import Card from "../card/Card";
import axios from "axios";

function Dashboard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/movieList").then((data) => {
      console.log(data);
      setMovies(data.data);
    });
  }, []);

  return (
    <>
      <div className="cardContainer">
        {movies.length > 0 &&
          movies.map((data, index) => {
            return <Card key={index} data={data} />;
          })}
      </div>
    </>
  );
}

export default Dashboard;
