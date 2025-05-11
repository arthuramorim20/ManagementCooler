import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config()

const supabaseURI:string = process.env.supabaseUrl as string; 
const supbaseKey:string = process.env.supbaseKey as string;

export const supabase = createClient(
    supabaseURI,
    supbaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZXRnd3N0Y3Jvc21hcG94dnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODc1NTYsImV4cCI6MjA2MjQ2MzU1Nn0.gEsAqEwpnXW8inzuB3WjhOMPqNjrrIUUd_wBMS8zp34'
);





    
