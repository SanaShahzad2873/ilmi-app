import { useState } from 'react'
import { syllabus } from '../data/syllabus'
import { getMistakes, setMistakes } from '../lib/store'

export default function Mistakes() {
  const [items, setItems] = useState(getMistakes())
  const [tab, setTab] = useState('all') // all | flagged
  const [subject, setSubject] = useState('all')

  function update(next) {
    setMistakes(next)
    setItems(next)
  }
  const toggleFlag = (id) =>
    update(items.map((m) => (m.id === id ? { ...m, flagged: !m.flagged } : m)))
  const remove = (id) => update(items.filter((m) => m.id !== id))
  const clearAll = () => update([])

  const flaggedCount = items.filter((m) => m.flagged).length
  const subjects = syllabus
    .map((s) => ({ ...s, n: items.filter((m) => m.subjectId === s.id).length }))
    .filter((s) => s.n > 0)

  const shown = items.filter(
    (m) =>
      (tab === 'all' || m.flagged) && (subject === 'all' || m.subjectId === subject)
  )

  // topic ke hisaab se group
  const groups = {}
  shown.forEach((m) => {
    const key = m.topicTitle || m.topicId || 'Other'
    if (!groups[key]) groups[key] = []
    groups[key].push(m)
  })

  return (
    <div>
      <h2 className="text-xl font-bold mb-1">📓 Mistakes Diary</h2>
      <p className="text-sm text-slate-500 mb-3">
        {items.length} tracked · {flaggedCount} flagged
      </p>

      <div className="mb-3 flex gap-2">
        {[['all', 'All mistakes'], ['flagged', 'Flagged only']].map(([k, label]) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`flex-1 rounded-lg py-2 text-sm font-semibold ${
              tab === k ? 'bg-indigo-600 text-white' : 'bg-white shadow-sm'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {subjects.length > 0 && (
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
          <Chip active={subject === 'all'} onClick={() => setSubject('all')}>
            Sab
          </Chip>
          {subjects.map((s) => (
            <Chip key={s.id} active={subject === s.id} onClick={() => setSubject(s.id)}>
              {s.name} ({s.n})
            </Chip>
          ))}
        </div>
      )}

      {shown.length === 0 && (
        <p className="rounded-lg bg-white p-4 shadow-sm">
          {items.length === 0 ? 'Abhi koi ghalti nahi. Shabash! 👏' : 'Is filter mein kuch nahi.'}
        </p>
      )}

      {Object.entries(groups).map(([title, list]) => (
        <div key={title} className="mb-5">
          <h3 className="mb-2 font-semibold text-indigo-700">{title}</h3>
          <div className="space-y-3">
            {list.map((m) => (
              <div key={m.id} className="rounded-xl bg-white p-4 shadow-sm">
                <p className="font-semibold mb-2">{m.question}</p>
                <p className="text-sm text-red-600">❌ Aapka jawab: {m.yourAnswer}</p>
                <p className="text-sm text-green-700">✅ Sahi jawab: {m.correctAnswer}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>
                    {m.date}
                    {m.count > 1 ? ` · ${m.count} dafa ghalat` : ''}
                  </span>
                  <span className="flex gap-3 text-sm">
                    <button onClick={() => toggleFlag(m.id)}>
                      {m.flagged ? '🚩 Flagged' : '⚑ Flag'}
                    </button>
                    <button onClick={() => remove(m.id)} className="text-red-500">
                      🗑
                    </button>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <button onClick={clearAll} className="text-sm text-red-600 underline">
          Sab saaf karo
        </button>
      )}
    </div>
  )
}

function Chip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`whitespace-nowrap rounded-full px-3 py-1 text-sm ${
        active ? 'bg-indigo-600 text-white' : 'bg-white shadow-sm'
      }`}
    >
      {children}
    </button>
  )
}