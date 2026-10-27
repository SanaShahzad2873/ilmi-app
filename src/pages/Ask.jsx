import { useState } from 'react'
import { syllabus } from '../data/syllabus'

const DAILY_LIMIT = 10

function getUsedToday() {
  try {
    const d = JSON.parse(localStorage.getItem('askUsage')) || {}
    return d.day === new Date().toDateString() ? d.count : 0
  } catch {
    return 0
  }
}
function setUsedToday(count) {
  localStorage.setItem(
    'askUsage',
    JSON.stringify({ day: new Date().toDateString(), count })
  )
}

export default function Ask() {
  const [subject, setSubject] = useState('Physics')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [used, setUsed] = useState(getUsedToday())

  async function ask() {
    setError('')
    setAnswer('')
    if (!question.trim()) return setError('Pehle sawal likho.')
    if (used >= DAILY_LIMIT) return setError('Aaj ke 10 sawal poore ho gaye. Kal dobara aana!')

    setLoading(true)
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, question }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Kuch masla aa gaya')
      setAnswer(data.answer)
      const next = used + 1
      setUsed(next)
      setUsedToday(next)
    } catch (e) {
      setError(e.message || 'Internet check karo aur dobara try karo.')
    }
    setLoading(false)
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-1">🤖 Ask Ustaad Jee</h2>
      <p className="text-sm text-slate-500 mb-4">
        Aaj {DAILY_LIMIT - used} / {DAILY_LIMIT} sawal baaki hain
      </p>

      <label className="text-sm font-semibold">Subject</label>
      <select
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="mb-3 mt-1 w-full rounded-lg border bg-white p-2"
      >
        {syllabus.map((s) => (
          <option key={s.id}>{s.name}</option>
        ))}
      </select>

      <label className="text-sm font-semibold">Aapka sawal</label>
      <textarea
        rows={4}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Jaise: Vector ka magnitude kaise nikalte hain?"
        className="mt-1 w-full rounded-lg border bg-white p-3"
      />

      <button
        onClick={ask}
        disabled={loading}
        className="mt-3 w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white disabled:opacity-60"
      >
        {loading ? 'Ustaad Jee soch rahe hain...' : 'Ask'}
      </button>

      {error && <p className="mt-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">{error}</p>}

      {answer && (
        <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">
          <p className="mb-2 font-semibold">🧑‍🏫 Jawab</p>
          <p className="whitespace-pre-wrap leading-relaxed">{answer}</p>
          <p className="mt-3 text-xs text-slate-400">
            AI kabhi ghalti kar sakta hai, textbook se tasdeeq kar lein.
          </p>
        </div>
      )}
    </div>
  )
}