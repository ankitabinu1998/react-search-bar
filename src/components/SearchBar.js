import { useState } from "react";
import fetchImages from "../api";

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
        <div>
            <input type="search" onChange={(event) => handleSearch(event)} onKeyDown={(event)=>{handleSubmit(event)}} value={searchTerm}/>
            <button type="submit" onClick={()=>{handleSubmit('submitButtonPressed')}}>Submit</button>
        </div>
    )
}

export default SearchBar;