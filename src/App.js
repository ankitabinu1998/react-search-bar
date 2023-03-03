import { useState } from 'react';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function App() {
  const [imageList, setImageList] = useState([]);
  return (
    <Container >
      <Card.Title className='mb-3 mt-3'>Image Searcher</Card.Title>
      <SearchBar setImageList={setImageList}/>
      <ImageList imageList={imageList}/>
    </Container>
  );
}

export default App;
