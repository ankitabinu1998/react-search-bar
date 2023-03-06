import { useState } from 'react';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [imageList, setImageList] = useState([]);
  return (
    <Container>
      <Row>
        <Col lg={12}><Card.Title className='mb-3 mt-3'>Image Searcher</Card.Title></Col>
        <Col lg={12}><SearchBar setImageList={setImageList}/></Col>
        <Col lg={12}><ImageList imageList={imageList}/></Col>
      </Row>
    </Container>
  );
}

export default App;
