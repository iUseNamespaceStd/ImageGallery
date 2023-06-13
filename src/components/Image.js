import { useEffect, useState } from 'react';
import ImageProvider from '../services/ImageProvider';

const Image = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(ImageProvider());
        const json = await response.json();
        setImageData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();
  }, [])

  if (!imageData) {
    return null;
  }

  return (
    <div style={{display: "flex", flexWrap: "wrap" , justifyContent: "center", alignItems: "center", gap: "20px"}}>
      {imageData.photos.photo.map((photo) => (
        <img style={{height: "200px", width: "250px", objectFit: "cover"}}
          key={photo.id}
          src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          alt={photo.title}
        />
      ))}
    </div>
  );
}

export default Image