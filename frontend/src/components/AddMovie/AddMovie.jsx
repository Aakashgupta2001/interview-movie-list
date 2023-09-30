import { useEffect, useState } from "react";
import moment from "moment/moment";
import "./addMovie.css";
import axios from "axios";

function AddMovie() {
  const [data, setData] = useState({
    Name: "",
    rating: "",
    releasedDate: "",
    ogDate: "",
  });

  const onChange = (e, ele) => {
    if (ele == "releasedDate") {
      let date = moment(e.target.value).format("DD/MM/YYYY");
      setData((prevData) => {
        return { ...prevData, releasedDate: date, ogDate: e.target.value };
      });
    } else {
      setData((prevData) => {
        return { ...prevData, [ele]: e.target.value };
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/add", data).then((data) => {
      console.log(data);
    });
  };

  return (
    <>
      <div className="AddMovie">
        <h1>Add Movie</h1>
        <form onSubmit={handleSubmit} className="movieForm">
          <div>
            Movie Name:
            <input type="text" onChange={(e) => onChange(e, "Name")} value={data.Name} />
          </div>
          <div>
            Rating:
            <input type="Number" max={5} min={0} onChange={(e) => onChange(e, "rating")} value={data.rating} />
          </div>
          <div>
            Released Date:
            <input type="date" onChange={(e) => onChange(e, "releasedDate")} value={data.ogDate} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddMovie;
