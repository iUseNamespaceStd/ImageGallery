import { useContext, useEffect, useState } from "react";
import '../styles/SearchHistory.css';
import { QueryContext, QueryUpdateContext, SearchClickedContext } from "../services/QueryContext";

const SearchHistory = () => {
    const query = useContext(QueryContext);
    const handleQueryChange = useContext(QueryUpdateContext);
    const searchClicked = useContext(SearchClickedContext);
    const [history, setHistory] = useState([]);

    /**
     * Will render page every time declared dependencies are updated
     */
    useEffect(() => {
        var duplicateFlag = history.some(h => h === query);
        if (query?.length > 0 && !duplicateFlag && searchClicked) {
            setHistory(prevHistory => [...prevHistory, query]);
        }
    }, [query, searchClicked])

    /**
     * Pass parameter values to the QueryUpdateContext
     * which will then trigger further action
     * @param value 
     */
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