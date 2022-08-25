import { serve } from 'https://deno.land/std/http/mod.ts'

serve(
  () => {
    return Response.redirect('https://discord.com/invite/5HwyPHkaWq', 307)
  },
  { port: 3000 },
)
