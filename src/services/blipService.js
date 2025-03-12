import axios from 'axios';

export const processImage = async(imagePath) => {
  const response = await axios.post('http://localhost:5000/blip-process', { imagePath });
  return response.data.output;
}

