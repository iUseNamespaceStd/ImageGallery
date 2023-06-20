import { useState } from 'react';
import Image from './components/Image';
import Search from './components/Search';
import './App.css';
import SearchHistory from './components/SearchHistory';
import logo from './media/logo.png'

function App() {
  const [query, setQuery] = useState('');

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <div className="App">
        <img className="logo" src={logo} alt="logo" />
        <Search onQueryChange={handleQueryChange} />
        <SearchHistory query={query}/>
        <Image query={query} />
    </div>
  );
}

export default App;