import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";
import SearchSection from "./components/SearchSection";
import AddMovie from './components/AddMovie'

export default function App() {
  const [data, setData] = useState({});
  const [searchValue, setSearchValue] = useState("");

  function onChangeSearchValue(event) {
    const searchValue = event.target.value;

    setSearchValue(searchValue);
  }

  function onKeyPressSearchValue(event) {
    if (event.charCode === 13) {
      fetchMovies();
    }
  }

  function onClickSearch() {
    fetchMovies();
  }

  function fetchMovies() {
    fetch(`http://localhost:5000/getMovies/${searchValue}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <Container style={{ PaddingTop: "100px" }}>
      <SearchSection
        onChangeSearchValue={onChangeSearchValue}
        onKeyPressSearchValue={onKeyPressSearchValue}
        onClickSearch={onClickSearch}
      />
      <br />
      <section className="movies-section">
        <Row>
          {data && data.length &&
            data.map((movie) => {
              return (
                <Col md={3} key={movie.imdbID}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={movie.poster}
                      alt="Card image cap"
                    />
                    <CardBody className="bg-secondary">
                      <CardTitle>{movie.title}</CardTitle>
                      <CardText>
                        {movie.year}-{movie.type}
                      </CardText>
                      <Link
                        to={`/booking-page/${movie.imdbId}`}
                        className="btn btn-primary"
                      >
                        Book Now
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </section>
      
    </Container>
  );
}
