import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://widktmukhmqbnxotphwt.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZGt0bXVraG1xYm54b3RwaHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NDUzNzcsImV4cCI6MTk5MzAyMTM3N30.q5boQwgCL4hCoU7rPneWzg36s0egd_Gjkx5jHLEHp0g'

export const supabase = createClient(supabaseUrl, supabaseKey)