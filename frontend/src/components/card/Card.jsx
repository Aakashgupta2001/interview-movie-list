import "./card.css";

function Card({ data }) {
  return (
    <div className="Card">
      <p className="">Movie Name : {data.Name}</p>
      <p className="">Rating : {data.rating}</p>
      <p className="">Release Date : {data.releasedDate}</p>
    </div>
  );
}

export default Card;
