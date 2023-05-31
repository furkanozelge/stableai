import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const handleImageUpload = async (event) => {
    event.preventDefault();

    if (!selectedImage) return;

    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = reader.result.split(',')[1];
      const base64Data2 = reader.result.split(',')[1];

      try {
        const url = 'https://1cc3-107-167-180-18.ngrok-free.app/image2image';
        const headers = {
          "content-type":"application/json",
          "ngrok-skip-browser-warning": "69420"
        }
        console.log("base",base64Data);
   
        const response = await axios.post(url, {
          content_image: base64Data,
          style_image: base64Data2,
        }, {
          headers: headers
        });

        if (response.status === 200) {
          const { data } = response.data;
          setUploadedImage(data);
        } else {
          console.error('Image upload failed.');
        }
      } catch (error) {
        console.error('Error occurred while uploading image:', error);
      } finally {
        setIsLoading(false);
      }
    };

    reader.readAsDataURL(selectedImage);
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <form onSubmit={handleImageUpload}>
        <input type="file" accept="image/*" onChange={handleImageSelect} />
        <input type="file" accept="image/*" onChange={handleImageSelect} />
      <button type="submit">Upload Images</button>
        
      </form>

      {isLoading && <div>Loading...</div>}

      {uploadedImage && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={`data:image/jpeg;base64, ${uploadedImage}`} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
