import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

import { Button,Card } from 'react-bootstrap';
const BookDetails = () => {
    
    const { id } = useParams();
    // use the book ID to fetch book details from your API
    // and display them in your component
    const [book, setBooks] = useState([]);
    console.log(id);
    useEffect(() => {
      async function fetchdata(){
      const token= JSON.parse(localStorage.getItem('token'));
     // console.log('hii',token);
       const responce= await fetch(`http://localhost:5000/api/books/${id}`,{
         headers:{
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
         },
       });
      
       const data = await responce.json();
       //console.log(data);
       setBooks(data.book);
      }
      fetchdata();
    }, [id]);
    
    console.log(book);
    if( (book).length === 0){
      return <h1>loading.....</h1>
    }
    return (
      <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <Card>
            {book.image.url && <Card.Img variant="top" src={book.image.url} alt='vdv'/>}
            <Card.Body>
              <Card.Title>{book.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
              <Card.Text>{book.description}</Card.Text>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Copies:</strong> {book.copies}</p>
              <p><strong>Floor:</strong> {book.floor}</p>
              <p><strong>Shelf:</strong> {book.shelf}</p>
              <Button variant="secondary" onClick={() => window.history.back()}>Go back</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
      
    );
  };
  export default BookDetails;