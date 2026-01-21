import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mziylsaimojepxqfdujr.supabase.co'
const supabaseKey = 'sb_publishable_91rtvR6YNTm1L5Lij7cI_Q_-dZ74zDa'

/* if (!supabaseUrl || !supabaseServiceKey) {
	throw new Error('Supabase URL and Service Role Key must be provided in .env')
} */

export const supabase = createClient(supabaseUrl, supabaseKey)
