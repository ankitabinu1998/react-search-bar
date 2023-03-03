import { useState } from "react";
import fetchImages from "../api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchBar (props) {
    const [searchTerm, setSearchTerm] = useState('');
    const {setImageList} = props;
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        const imageList = await fetchImages(searchTerm);
        setImageList(imageList);
        setSearchTerm('');
    }
    return (
            <form onSubmit={handleSubmit}>
                <Form.Control className="mb-3" placeholder="Enter search term" type="search" onChange={handleSearch} value={searchTerm}/>
                <Button className="mb-3" type="submit">Search</Button>
            </form>
    )
}

export default SearchBar;