
import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Book.css";
// import mern from "./mern.pdf";

const Book = (props) => {
    const history = useNavigate()
    const { _id, name, author, description, price, image, bookfile } = props.book;
    const deleteHandler = async() => {
await axios.delete(`http://localhost:5000/books/${_id}`)
.then(res=>res.data)
.then(()=> history("/"))
.then(()=>history("/books"));

    }

    //   const handleClick = () => {

    //   return   <div className="card">
    //    <img src={image} alt={name} />
    //   </div>
    //  }
  return( <div className="card">
<img src={image} alt={name} />
<article>By {author}</article>
<h3>{name}</h3>
<p>{description}</p>
<h3>Rs {price}</h3>

<Button sx={{mt:'auto'}}><a href={bookfile} target="_blank"
                    rel="noreferrer">
                    view
                </a> </Button>
<Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>Update</Button>
<Button onClick={deleteHandler} sx={{mt:'auto'}}>Delete</Button>
  </div>
  );
  
};

export default Book;
