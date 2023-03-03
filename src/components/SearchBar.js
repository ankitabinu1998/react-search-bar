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
        if (event.key === 'Enter' || event === 'submitButtonPressed') {
            const imageList = await fetchImages(searchTerm);
            setImageList(imageList);
            setSearchTerm('');
        }

    }
    return (
            <>
                <Form.Control className="mb-3" placeholder="Enter search term" type="search" onChange={(event) => handleSearch(event)} onKeyDown={(event)=>{handleSubmit(event)}} value={searchTerm}/>
                <Button className="mb-3" type="submit" onClick={()=>{handleSubmit('submitButtonPressed')}}>Search</Button>
            </>
    )
}

export default SearchBar;