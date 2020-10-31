import React from "react";
import { InputGroup, Input, Button } from "reactstrap";
import {Link } from 'react-router-dom'

export default function SearchSection(props) {
  const { onChangeSearchValue, onKeyPressSearchValue, onClickSearch } = props;

  return (
    <section className="search-section">
      <br/>
      <br/>
      <InputGroup>
        <Input
        className=" mr-2"
          placeholder=" Search movie name..."
          onChange={onChangeSearchValue}
          onKeyPress={onKeyPressSearchValue}
        />
        <Button className=" mr-2" color="success" onClick={onClickSearch}>
          Search
        </Button>
        <Link to={`/add-movie`} className='btn btn-primary mr-2'>
          Add Movie
        </Link>
      </InputGroup>
    </section>
  );
}
