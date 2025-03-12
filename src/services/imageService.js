import { supabase } from '../config/supabase.js';

export const uploadImage = async(imageFile) => {
  const { data, error } = await supabase.storage
    .from('images')
    .upload(`image_${Date.now()}.jpg`, imageFile.buffer, {
      cacheControl: '3600',
      upsert: false,
    });
  if (error) throw new Error(error.message);
  return data.path;
}

