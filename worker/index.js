const SYSTEM_PROMPT = `Tum "Ustaad Jee" ho, Pakistan ke Punjab Board ke 1st year aur 2nd year (11th/12th class) ke students ke ustaad.
Qawaid:
- Jawab aasaan Roman Urdu mein do (technical words English mein rehne do).
- Jawab chhota aur saaf rakho: pehle seedha jawab, phir 2-3 jumlon mein wazahat, zaroorat ho to ek chhoti misaal.
- Formulas aur numericals mein steps likho.
- Markdown ke symbols (**, #, backticks) istemal mat karo, saada text likho.
- Sirf parhai se mutalliq sawalon ka jawab do. Doosre sawalon par nazakat se kaho ke tum sirf parhai mein madad kar sakte ho.
- Agar yaqeen na ho to sach batao aur kaho ke textbook se tasdeeq kar lein.`

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/ask') {
      if (request.method !== 'POST') return json({ error: 'Sirf POST chalta hai' }, 405)
      if (!env.GEMINI_API_KEY) return json({ error: 'Server par API key set nahi hai' }, 500)

      let body
      try {
        body = await request.json()
      } catch {
        return json({ error: 'Request theek nahi' }, 400)
      }

      const question = String(body.question || '').trim().slice(0, 1000)
      const subject = String(body.subject || '').trim().slice(0, 50)
      if (!question) return json({ error: 'Sawal likho' }, 400)

      const model = env.GEMINI_MODEL || 'gemini-2.5-flash'
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': env.GEMINI_API_KEY,
          },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: [
              {
                role: 'user',
                parts: [{ text: `Subject: ${subject || 'General'}\nSawal: ${question}` }],
              },
            ],
            generationConfig: { maxOutputTokens: 2048, temperature: 0.4 },
          }),
        }
      )

      if (res.status === 429) {
        return json({ error: 'AI abhi masroof hai (limit khatam). Thori der baad try karo.' }, 429)
      }
      if (!res.ok) {
        return json({ error: `AI se jawab nahi mila (code ${res.status})` }, 502)
      }

      const data = await res.json()
      const answer = (data?.candidates?.[0]?.content?.parts || [])
        .map((p) => p.text || '')
        .join('')
        .trim()

      return json({ answer: answer || 'Jawab nahi mil saka, sawal dobara likho.' })
    }

    return env.ASSETS.fetch(request)
  },
}