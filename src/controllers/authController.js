import { supabase } from '../config/supabase.js';

const login = async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) res.status(400).send(error.message);
  else res.send(data);
}

const signin =  async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) res.status(400).send(error.message);
  else res.send(data);
}

const logout = async (req, res) => {
  const { error } = await supabase.auth.signOut();
  if (error) res.status(500).send(error.message);
  else res.send({ message: 'Logged out successfully' });
}

export { login, signin, logout };