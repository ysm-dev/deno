import { serve } from 'https://deno.land/std/http/mod.ts'

serve(
  () => {
    return Response.redirect('https://deno.kr', 307)
  },
  { port: 3000 },
)
