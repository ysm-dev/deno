import { serve } from 'https://deno.land/std/http/mod.ts'

serve(
  () => {
    return Response.redirect('https://discord.com/invite/4y93ujhH', 307)
  },
  { port: 3000 },
)
