import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const supabase = createClient(runtimeConfig.public.supabaseUrl, runtimeConfig.public.supabaseKey)

    return {
        provide: {
            supabase
        }
    }
})