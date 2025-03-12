import axios from 'axios';

export const generateParagraph = async (prompt, blipOutput) => {
  const input = `User prompt: ${prompt}. Image description: ${blipOutput}. Generate a paragraph based on this.`;
  const response = await axios.post('http://localhost:5000/qwen-generate', { input });
  return response.data.paragraph;
}

