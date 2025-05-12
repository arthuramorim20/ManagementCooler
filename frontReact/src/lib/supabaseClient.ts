import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hmetgwstcrosmapoxvvi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtZXRnd3N0Y3Jvc21hcG94dnZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODc1NTYsImV4cCI6MjA2MjQ2MzU1Nn0.gEsAqEwpnXW8inzuB3WjhOMPqNjrrIUUd_wBMS8zp34'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)