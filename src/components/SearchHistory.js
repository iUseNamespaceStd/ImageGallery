import { useContext, useEffect, useState } from "react";
import '../styles/SearchHistory.css';
import { QueryContext, QueryUpdateContext, SearchClickedContext } from "./QueryContext";

const SearchHistory = () => {
    const query = useContext(QueryContext);
    const handleQueryChange = useContext(QueryUpdateContext);
    const searchClicked = useContext(SearchClickedContext);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        var duplicateFlag = history.some(h => h === query);
        if (query?.length > 0 && !duplicateFlag && searchClicked) {
            setHistory(prevHistory => [...prevHistory, query]);
        }
    }, [query, searchClicked])

    const onTagSelection = (value) =>  {
        handleQueryChange(value, true);
    }

    return (
        <div className="search-history-wrapper">
            {history.map((value, index) => (
                <div className="tag" key={index}
                onClick={() => onTagSelection(value)}>{value}</div>
            ))}
        </div>
    );
}

export default SearchHistory;