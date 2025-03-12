import { supabase } from '../config/supabase.js';

export const isLoggedIn = async (req, res, next)  => {
  const user = supabase.auth.user();
  if (!user) res.status(401).send('Unauthorized');
  else {
    req.user = user;
    next();
  }
}

