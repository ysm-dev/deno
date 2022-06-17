import { serve } from 'https://deno.land/std@0.144.0/http/server.ts'

serve((req) => {
  console.log(req)
  return new Response('Hello World!\n')
})
