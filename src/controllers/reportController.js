import { uploadImage } from '../services/imageService.js';
import { processImage } from '../services/blipService.js';
import { generateParagraph } from '../services/qwenService.js';
import { createReport as _createReport } from '../models/reportModel.js';

const createReport = async (req, res)  => {
  const { prompt } = req.body;
  const imageFile = req.file;

  try {
    const imagePath = await uploadImage(imageFile);
    const blipOutput = await processImage(imagePath);
    const qwenOutput = await generateParagraph(prompt, blipOutput);
    await _createReport(req.user.id, prompt, imagePath, blipOutput, qwenOutput);
    res.send({ message: 'Report created successfully', qwenOutput });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export { createReport };