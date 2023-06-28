import { useContext, useEffect, useState } from 'react';
import { ImageUpdateContext } from '../services/ImageContext';
import ImageProvider from '../services/ImageProvider';
import { QueryContext, SearchClickedContext } from '../services/QueryContext';
import '../styles/Image.css';

const Image = () => {
  const query = useContext(QueryContext);
  const searchClicked = useContext(SearchClickedContext);
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const onImageClick = useContext(ImageUpdateContext);

  /**
   * Will render page every time declared dependencies are updated
   */
  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (initialLoad || searchClicked) {
          setIsLoading(true);
          const json = await ImageProvider(query);
          setImageData(json);
          setIsLoading(false);
        }
        setInitialLoad(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchImage();
  }, [query, searchClicked, initialLoad])

  /**
   * Loading animation
   */
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  /**
   * No images retrieved
   */
  if (!imageData) {
    return null;
  }

  /**
   * Pass parameter values to the ImageUpdateContext
   * which will then trigger further action
   * @param photoId 
   * @param imageData 
   */
  const handleOnClick = (photoId, imageData) => {
    onImageClick(photoId, imageData);
  }

  return (
    <div className="image-container">
      {imageData.photos.photo.map((photo) => (
        <img
          key={photo.id}
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
          onClick={() => handleOnClick(photo.id, imageData.photos.photo)}
        />
      ))}
    </div>
  );
}

export default Image;