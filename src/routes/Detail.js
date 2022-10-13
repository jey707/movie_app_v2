import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Detail.css";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(navigate);
  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  if (location.state) {
    const { title, poster, summary, year, genres } = location.state;
    return (
      <section className="detail">
        <img src={poster} alt={title} title={title} />
        <div className="detail_data">
          <h3>{title}</h3>
          <h5>{year}</h5>
          <ul>
            {genres.map((gen, index) => (
              <li key={index}>{gen}</li>
            ))}
          </ul>
          <p>{summary}</p>
        </div>
      </section>
    );
  }
  return null;
}
export default Detail;
