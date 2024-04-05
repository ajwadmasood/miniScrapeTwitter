import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient('https://eykmopxbjjchifugwryg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5a21vcHhiampjaGlmdWd3cnlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyNTMyMjgsImV4cCI6MjAyNzgyOTIyOH0.rfPjQRzT8KlJeZY5K6paYwlyb9eF_P6SdxhaSXDeEQc')
