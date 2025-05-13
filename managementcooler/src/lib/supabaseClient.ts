import { createClient } from '@supabase/supabase-js';
// import dotenv from 'dotenv';

// dotenv.config();
// const supabaseUrl: string = process.env.SUPABASE_URL as string;
// const supabaseKey: string = process.env.SUPABASE_KEY as string;

// console.log('Supabase URL:', supabaseUrl);
// console.log('Supabase Key:', supabaseKey);

export const supabase = createClient(
    "https://hmetgwstcrosmapoxvvi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZXRnd3N0Y3Jvc21hcG94dnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODc1NTYsImV4cCI6MjA2MjQ2MzU1Nn0.gEsAqEwpnXW8inzuB3WjhOMPqNjrrIUUd_wBMS8zp34"
);

