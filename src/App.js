import { useState } from 'react';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';

function App() {
  const [imageList, setImageList] = useState([]);
  return (
    <div >
      <h1>Image Searcher</h1>
      <SearchBar setImageList={setImageList}/>
      <ImageList imageList={imageList}/>
    </div>
  );
}

export default App;
