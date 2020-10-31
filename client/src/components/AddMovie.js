import React, { useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { InputGroup, Input, Button, Container } from 'reactstrap'

export default function AddMovie () {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')
  const [imdbID, setId] = useState('')
  const [type, setType] = useState('')

  const history = useHistory();


  function onClickInsert () {
    console.log(imdbID)
    axios
      .post(`http://localhost:5000/addMovie`, {
        title,
        year,
        poster,
        imdbID,
        type
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
  }

  return (
      <Container>
    <section >
        <br/>
        <h3>Add Details Below</h3>
        <br/>
      <p>Enter the Movie Name</p>

      <Input
        placeholder='Movie Name'
        onChange={e => {
          setTitle(e.target.value)
        }}
      />
      <br />
      <p>Enter the Year</p>
      <Input
        placeholder='Enter The Year'
        onChange={e => {
          setYear(e.target.value)
        }}
      />
      <br />
      <p>Enter the imdbID</p>
      <Input
        placeholder='Enter The imdbID'
        onChange={e => {
          setId(e.target.value)
        }}
      />
      <br />
      <p>Enter the Type</p>
      <Input
        placeholder='Enter The Type'
        onChange={e => {
          setType(e.target.value)
        }}
      />
      <br />
      <p>Enter the Poster Link</p>

      <Input
        placeholder='Enter The Poster link'
        onChange={e => {
          setPoster(e.target.value)
        }}
      />
      <br />
      <Button className=" mr-2" color='success' onClick={onClickInsert}>
        Add Movie
      </Button>
      <Button
        type='button'
        className='btn btn-secondary mr-2'
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </section>
    </Container>
  )
}