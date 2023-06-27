import { useContext, useEffect, useState } from 'react';
import ImageProvider from '../services/ImageProvider';
import '../styles/Image.css';
import { QueryContext, SearchClickedContext } from './QueryContext';

const Image = () => {
  const query = useContext(QueryContext);
  const searchClicked = useContext(SearchClickedContext);
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

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

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!imageData) {
    return null;
  }

  return (
    <div className="image-container">
      {imageData.photos.photo.map((photo) => (
        <img
          key={photo.id}
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
        />
      ))}
    </div>
  );
}

export default Image;