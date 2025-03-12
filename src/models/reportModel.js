import { supabase } from '../config/supabase.js';

export const createReport = async(userId, prompt, imagePath, blipOutput, qwenOutput) => {
  const { data, error } = await supabase.from('reports').insert({
    user_id: userId,
    prompt,
    image_path: imagePath,
    blip_output: blipOutput,
    qwen_output: qwenOutput,
  });
  if (error) throw new Error(error.message);
  return data;
}

