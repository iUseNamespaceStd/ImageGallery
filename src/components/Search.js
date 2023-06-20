import { useState } from "react";
import '../styles/Search.css';

const Search = (props) => {
    const [query, setQuery] = useState("");
    
    const onSubmitUserQuery = () => {
        props.onQueryChange(query);
    }

    return (
        <div className="search-container">
            <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search" />
            <button onClick={onSubmitUserQuery}>Search</button>
        </div>
    );
};

export default Search;