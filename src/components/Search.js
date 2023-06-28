import { useContext } from "react";
import { QueryUpdateContext } from "../services/QueryContext";
import '../styles/Search.css';

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
                placeholder="e.g. cat"
                onChange={(e) => handleQueryChange(e.target.value, false)}
                type="search"
                onKeyUp={(e) => { if (e.key === "Enter") onSubmitUserQuery(); }} />
            <button onClick={onSubmitUserQuery} onKeyUp={onSubmitUserQuery}>Search</button>
        </div>
    );
};

export default Search;