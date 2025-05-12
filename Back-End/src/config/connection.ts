import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config()

const supabaseURI:string = process.env.supabaseUrl as string; 
const supbaseKey:string = process.env.supbaseKey as string;

export const supabase = createClient(
    supabaseURI || "https://hmetgwstcrosmapoxvvi.supabase.co",
    supbaseKey
);





    
