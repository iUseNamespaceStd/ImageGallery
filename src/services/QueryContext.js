import React, { useState } from 'react';

// Create the context
export const QueryContext = React.createContext();
export const QueryUpdateContext = React.createContext();
export const SearchClickedContext = React.createContext();

// Create a provider component
export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);

    const handleQueryChange = (newQuery, isSearchClicked) => {
        setQuery(newQuery);
        setSearchClicked(isSearchClicked);
    };

    return (
        <QueryContext.Provider value={query}>
            <QueryUpdateContext.Provider value={handleQueryChange}>
                <SearchClickedContext.Provider value={searchClicked}>
                    {children}
                </SearchClickedContext.Provider> 
            </QueryUpdateContext.Provider>
        </QueryContext.Provider>
    );
};

export default QueryProvider;