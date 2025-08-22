import { supabase } from "./supabaseClient";

// Signup
export async function signUp(email, password, role) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw error;

  // Store user role in Supabase table (Farmers / Buyers)
  if (data.user) {
    await supabase.from("profiles").insert([{ id: data.user.id, email, role }]);
  }

  return data;
}

// Login
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

// Logout
export async function signOut() {
  await supabase.auth.signOut();
}

// Get Current User
export async function getUser() {
  const { data } = await supabase.auth.getUser();
  return data.user;
}
