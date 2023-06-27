import { useContext, useState } from "react";
import Image from "./components/Image";
import Search from "./components/Search";
import "./App.css";
import SearchHistory from "./components/SearchHistory";
import logo from "./media/logo.png";
import ModalDialog from "./components/ModalDialog/ModalDialog";
import ImageContext from "./services/ImageContext";

function App() {
  const [query, setQuery] = useState("");
  const [contextValue, setContextValue] = useState({show:false, src:""});


  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const onImageClick = (e) => {setContextValue({show: true, src: e.target.src}); console.log(e);};


  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <Search onQueryChange={handleQueryChange} query={query}/>{" "}
      <SearchHistory query={query} onTagClick={handleQueryChange}/>
      <ImageContext.Provider value={contextValue}>
        <Image query={query} handleOnClick={onImageClick}/>
        <ModalDialog title="motitre" />
      </ImageContext.Provider>
    </div>
  );
}

export default App;
