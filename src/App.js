import "./App.css";
import Image from "./components/Image";
import ModalDialog from "./components/ModalDialog/ModalDialog";
import Search from "./components/Search";
import SearchHistory from "./components/SearchHistory";
import logo from "./media/logo.png";
import { ImageContextProvider } from "./services/ImageContext";
import QueryProvider from "./services/QueryContext";

function App() {

  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <QueryProvider>
        <Search />
        <SearchHistory />
        <ImageContextProvider>
          <Image />
          <ModalDialog />
        </ImageContextProvider>
      </QueryProvider>
    </div>
  );
}

export default App;