import React, { useState } from 'react'
import axios from 'axios'
import { InputGroup, Input, Button } from 'reactstrap'

export default function AddMovie () {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')
  const [imdbID, setId] = useState('')
  const [type, setType] = useState('')

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
    <section className='search-section'>
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
        placeholder='Enter The ID'
        onChange={e => {
          setId(e.target.value)
        }}
      />
      <br />
      <p>Enter the Type</p>
      <Input
        placeholder='Enter The type'
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
      <Button color='success' onClick={onClickInsert}>
        Insert Data
      </Button>
    </section>
  )
}