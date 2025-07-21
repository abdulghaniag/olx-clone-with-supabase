
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = 'https://pibxjmnnnfiveqmkgrme.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYnhqbW5ubmZpdmVxbWtncm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NDQ5ODIsImV4cCI6MjA2ODQyMDk4Mn0.5JiqXOWNaC_kLmTHN57pYhXPuhXmn83t7qBW6qCIfTk"
export const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);
