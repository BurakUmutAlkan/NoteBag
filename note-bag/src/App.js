import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row, ListGroup, Form } from 'react-bootstrap';
import './App.css';
import NbNavbar from './components/NbNavbar';


function App() {

  const [notes, setNotes] = useState([]);

  useEffect(function() {

    axios.get("https://localhost:7292/api/Notes")
      .then(function(response) {
        setNotes(response.data);
      })

  }, []);

  return (
    <div className="App">

      <NbNavbar />

      <Container fluid className='mt-4'>

        <Row>

          <Col sm={4} md={3}>

            <Button>Yeni Not</Button>

            <ListGroup className='mt-3 mb-3'>

              { notes.map((note) =>  

              <ListGroup.Item action key={note.id}>
                {note.title}
              </ListGroup.Item>

              )}
            </ListGroup>


          </Col>

          <Col sm={8} md={9}>

            <Form.Group className='mb-3'>

              <Form.Control type='text' placeholder='Title'></Form.Control>

            </Form.Group>

            <Form.Group className='mb-3'>

              <Form.Control as='textarea' placeholder='Content' rows={10}></Form.Control>

            </Form.Group>

            <div>

              <Button className="me-2">Kaydet</Button>

              <Button variant='danger'>Sil</Button>

            </div>

          </Col>

        </Row>

      </Container>

    </div>

  );
}

export default App;
