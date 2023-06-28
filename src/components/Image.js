import { useEffect, useState } from 'react';
import ImageProvider from '../services/ImageProvider';
import '../styles/Image.css';
import ImageContext from '../services/ImageContext';

const Image = (props) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const json = await ImageProvider(props.query);
        setImageData(json);
        console.log(imageData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, [props.query])

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
          onClick={ (e) => props.handleOnClick(e,photo.id,imageData.photos.photo)}
        />
      ))}
    </div>
  );
}

export default Image;