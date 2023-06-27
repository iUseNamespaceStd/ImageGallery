import './App.css';
import Image from './components/Image';
import { QueryProvider } from './components/QueryContext';
import Search from './components/Search';
import SearchHistory from './components/SearchHistory';
import logo from './media/logo.png';

function App() {

  return (
    <div className="App">
        <img className="logo" src={logo} alt="logo" />
        <QueryProvider>
          <Search />
          <SearchHistory />
          <Image />
        </QueryProvider>
    </div>
  );
}

export default App;