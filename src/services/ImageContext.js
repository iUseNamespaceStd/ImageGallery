import React, { useState } from "react";

export const ImageContext = React.createContext();
export const ImageUpdateContext = React.createContext();

export const ImageContextProvider = ({children}) => {
    const [contextValue, setContextValue] = useState({show:false, index:0, imageDataArr: []});

    const onImageClick = (imageIndex, imageDataArr) => {
        setContextValue({show: true, index: imageIndex, imageDataArr: imageDataArr}); 
    };

    return (
        <ImageContext.Provider value={contextValue}>
            <ImageUpdateContext.Provider value={onImageClick}>
                {children}
            </ImageUpdateContext.Provider>
        </ImageContext.Provider>
    )
}

export default ImageContextProvider;