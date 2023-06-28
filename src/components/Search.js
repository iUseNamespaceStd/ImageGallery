import { useState, useEffect } from "react";
import '../styles/Search.css';

const Search = (props) => {
    const [query, setQuery] = useState("");
    
    const onSubmitUserQuery = () => {
        props.onQueryChange(query);
    }

    useEffect(() => setQuery(props?.query),[props?.query]);

    return (
        <div className="search-container">
            <input
            value={query}
            placeholder="e.g. cat"
            onChange={(e) => setQuery(e.target.value)}
            type="search" onKeyUp={(e) => {if(e.key === "Enter" ) onSubmitUserQuery(query);}}/>
            <button onClick={onSubmitUserQuery} onKeyUp={onSubmitUserQuery}>Search</button>
        </div>
    );
};

export default Search;