import { useEffect, useState } from "react"
import '../styles/SearchHistory.css';

const SearchHistory = (props) => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        var duplicateFlag = history.some(h => h === props.query);
        if (props.query?.length > 0 && !duplicateFlag) {
            setHistory(prevHistory => [...prevHistory, props.query]);
        }
    }, [props.query])

    return (
        <div className="search-history-wrapper">
            {history.map((value, index) => (
                <div className="tag" key={index}>{value}</div>
            ))}
        </div>
    );
}

export default SearchHistory;