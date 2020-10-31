import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { movieTitle } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
    console.log(data);
  }, []);

  function getMovieDetail() {
    setLoading(true);
    console.log(movieTitle+"in Fetch");
    fetch(`http://localhost:5000/getMovies/${movieTitle}`)
      .then((response) => response.json())
      .then((result) => {
        const [movieDetail]=result;
        setLoading(false);
        setData(movieDetail);
        console.log(movieDetail +"in result");
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  function onClickBook() {
    alert("1 Ticket Booked for "+data.title);
  }

  return (
    <Container className="booking-page-class">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
           {console.log(data.year)}
          <h2>{data.title}</h2>
          <h4>Year: {data.year}</h4>
          <p>
            <img src={data.poster} alt="img" className="img-thumbnail" width="300px"
            height="300px" />
          </p>
          <h5>ImdbID: {data.imdbID}</h5>
          <h6>Type: {data.type}</h6>
          {/* <p>PLOT</p>
          <p>{data.plot}</p>
          <h5>Rating: {data.imdbRating}</h5>
          <h6>Language: {data.language}</h6>
          <h6>Country: {data.country}</h6>
          <br /> */}
          <br/>
          <br/>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={onClickBook}
          >
            Book Ticket
          </button>
          <button
            type="button"
            className="btn btn-danger mr-2"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
          <br/>
          <br/>
        </>
      )}
    </Container>
  );
}
