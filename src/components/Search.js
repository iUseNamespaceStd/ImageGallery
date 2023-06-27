import { useContext } from "react";
import '../styles/Search.css';
import { QueryUpdateContext } from "./QueryContext";

const Search = () => {
    const handleQueryChange = useContext(QueryUpdateContext);
    
    const onSubmitUserQuery = () => {
        const inputValue = document.getElementById('search-input').value;
        handleQueryChange(inputValue, true);
    };
 
    return (
        <div className="search-container">
            <input
            id="search-input"
            onChange={(e) => handleQueryChange(e.target.value, false)}
            type="search" />
            <button onClick={onSubmitUserQuery}>Search</button>
        </div>
    );
};

export default Search;