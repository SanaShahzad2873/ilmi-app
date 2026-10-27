import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { findTopic } from '../lib/store'

export default function Flashcards() {
  const { subjectId, topicId } = useParams()
  const [params] = useSearchParams()
  const year = params.get('year') || '1'
  const { topic } = findTopic(subjectId, topicId)
  const [cards, setCards] = useState(topic?.flashcards || [])
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const back = `/subject/${subjectId}/topic/${topicId}?year=${year}`

  if (!topic || cards.length === 0) {
    return (
      <div>
        <Link to={back} className="text-sm text-indigo-600">← Wapas</Link>
        <p className="mt-4 rounded-lg bg-amber-100 p-3 text-amber-800">
          Is topic ke flashcards jald aa rahe hain.
        </p>
      </div>
    )
  }

  function go(step) {
    setI((i + step + cards.length) % cards.length)
    setFlipped(false)
  }
  function shuffle() {
    setCards([...cards].sort(() => Math.random() - 0.5))
    setI(0)
    setFlipped(false)
  }

  return (
    <div>
      <Link to={back} className="text-sm text-indigo-600">← Wapas</Link>
      <h2 className="text-xl font-bold my-2">🗂️ {topic.title}</h2>
      <p className="mb-3 text-sm text-slate-500">
        Card {i + 1} / {cards.length} · card par tap karke palto
      </p>

      <button
        onClick={() => setFlipped(!flipped)}
        className={`flex min-h-56 w-full items-center justify-center rounded-2xl p-6 text-center text-lg shadow ${
          flipped ? 'bg-indigo-600 text-white' : 'bg-white'
        }`}
      >
        {flipped ? cards[i].back : cards[i].front}
      </button>

      <div className="mt-4 flex gap-2">
        <button onClick={() => go(-1)} className="flex-1 rounded-lg bg-white py-2 shadow-sm">
          ← Pichla
        </button>
        <button onClick={shuffle} className="rounded-lg bg-white px-4 py-2 shadow-sm">
          🔀
        </button>
        <button onClick={() => go(1)} className="flex-1 rounded-lg bg-indigo-600 py-2 text-white">
          Agla →
        </button>
      </div>
    </div>
  )
}