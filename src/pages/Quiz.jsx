import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { quizzes } from '../data/quizzes'
import { addAttempt, addMistake, findTopic } from '../lib/store'

const LEVELS = [
  { key: 'easy', label: '🟢 Easy', box: 'border-green-500' },
  { key: 'medium', label: '🟡 Medium', box: 'border-yellow-500' },
  { key: 'hard', label: '🔴 Hard', box: 'border-red-500' },
  { key: 'all', label: '⚪ All Questions', box: 'border-slate-300' },
]
const SECONDS_PER_Q = 45
const LETTERS = ['A', 'B', 'C', 'D', 'E']

function fmt(s) {
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}

export default function Quiz() {
  const { subjectId, topicId } = useParams()
  const [params] = useSearchParams()
  const year = params.get('year') || '1'
  const allQuestions = quizzes[topicId] || []
  const info = findTopic(subjectId, topicId)
  const back = `/subject/${subjectId}/topic/${topicId}?year=${year}`

  const [stage, setStage] = useState('pick') // pick | play | done
  const [level, setLevel] = useState('all')
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [flags, setFlags] = useState([])
  const [score, setScore] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const finished = useRef(false)

  function countFor(key) {
    return key === 'all'
      ? allQuestions.length
      : allQuestions.filter((q) => q.difficulty === key).length
  }

  function start(key) {
    const qs = key === 'all' ? allQuestions : allQuestions.filter((q) => q.difficulty === key)
    if (qs.length === 0) return
    finished.current = false
    setLevel(key)
    setQuestions(qs)
    setIndex(0)
    setAnswers(Array(qs.length).fill(null))
    setFlags(Array(qs.length).fill(false))
    setSecondsLeft(qs.length * SECONDS_PER_Q)
    setStage('play')
  }

  function finish() {
    if (finished.current) return
    finished.current = true
    let sc = 0
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) {
        sc++
      } else {
        addMistake({
          subjectId,
          topicId,
          topicTitle: info.topic?.title || topicId,
          chapterTitle: info.chapter?.title || '',
          question: q.q,
          yourAnswer: answers[i] === null ? 'Jawab nahi diya' : q.options[answers[i]],
          correctAnswer: q.options[q.answer],
          date: new Date().toLocaleDateString(),
        })
      }
    })
    addAttempt({
      subjectId,
      topicId,
      topicTitle: info.topic?.title || topicId,
      level,
      score: sc,
      total: questions.length,
      ts: Date.now(),
    })
    setScore(sc)
    setStage('done')
  }

  function trySubmit() {
    const left = answers.filter((a) => a === null).length
    if (left > 0 && !window.confirm(`${left} sawal baaki hain. Phir bhi submit karna hai?`)) return
    finish()
  }

  useEffect(() => {
    if (stage !== 'play') return
    if (secondsLeft <= 0) {
      finish()
      return
    }
    const t = setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => clearTimeout(t)
  }, [stage, secondsLeft])

  if (allQuestions.length === 0) {
    return (
      <div>
        <Link to={back} className="text-sm text-indigo-600">← Wapas</Link>
        <p className="mt-4 rounded-lg bg-amber-100 p-3 text-amber-800">
          Is topic ka quiz jald aa raha hai.
        </p>
      </div>
    )
  }

  // ---------- Difficulty chunna ----------
  if (stage === 'pick') {
    return (
      <div>
        <Link to={back} className="text-sm text-indigo-600">← Wapas</Link>
        <h2 className="text-xl font-bold my-2">{info.topic?.title || 'Quiz'}</h2>
        <p className="text-sm text-slate-500 mb-4">
          {allQuestions.length} sawal · har sawal ke liye {SECONDS_PER_Q} second
        </p>

        <div className="mb-4 rounded-lg bg-white p-3 text-sm shadow-sm">
          <p className="font-semibold mb-1">Hidayat</p>
          <ul className="list-disc pl-5 text-slate-600">
            <li>Har sawal dhyan se parho</li>
            <li>Navigator se kisi bhi sawal par ja sakte ho</li>
            <li>Mushkil sawal ko 🚩 flag kar ke baad mein dekho</li>
            <li>Waqt khatam hote hi quiz khud submit ho jayega</li>
          </ul>
        </div>

        <p className="font-semibold mb-2">Difficulty level chuno</p>
        <div className="space-y-2">
          {LEVELS.map((l) => {
            const n = countFor(l.key)
            return (
              <button
                key={l.key}
                disabled={n === 0}
                onClick={() => start(l.key)}
                className={`flex w-full items-center justify-between rounded-lg border-2 bg-white p-3 font-semibold disabled:opacity-40 ${l.box}`}
              >
                <span>{l.label}</span>
                <span className="text-sm font-normal text-slate-500">{n} sawal</span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ---------- Result aur review ----------
  if (stage === 'done') {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Quiz mukammal! 🎉</h2>
          <p className="text-4xl font-bold text-indigo-600">
            {score} / {questions.length}
          </p>
          <p className="mb-4 text-slate-500">{percent}% score</p>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-2">
          <button
            onClick={() => setStage('pick')}
            className="rounded-lg bg-indigo-600 p-3 text-white"
          >
            Dobara quiz do
          </button>
          <Link to="/dashboard" className="rounded-lg bg-white p-3 text-center shadow-sm">
            📊 Dashboard
          </Link>
        </div>

        <h3 className="mb-2 font-semibold">Review</h3>
        <div className="space-y-4">
          {questions.map((q, n) => {
            const mine = answers[n]
            const ok = mine === q.answer
            return (
              <div key={n} className="rounded-xl bg-white p-4 shadow-sm">
                <p className="mb-1 text-xs text-slate-400">
                  Sawal {n + 1} · {q.difficulty}
                  {flags[n] ? ' · 🚩' : ''}
                </p>
                <p className="mb-2 font-semibold">{q.q}</p>
                <p className={`mb-2 text-sm font-semibold ${ok ? 'text-green-700' : 'text-red-600'}`}>
                  {ok ? '✅ Sahi' : mine === null ? '⚠️ Jawab nahi diya' : '❌ Ghalat'}
                </p>
                <div className="space-y-1">
                  {q.options.map((opt, i) => {
                    let style = 'bg-slate-50'
                    if (i === q.answer) style = 'bg-green-100'
                    else if (i === mine) style = 'bg-red-100'
                    return (
                      <div key={i} className={`rounded p-2 text-sm ${style}`}>
                        <b>{LETTERS[i]}.</b> {opt}
                        {i === mine && i !== q.answer ? '  (aapka jawab)' : ''}
                        {i === q.answer ? '  ✓' : ''}
                      </div>
                    )
                  })}
                </div>
                {q.explanation && (
                  <p className="mt-2 rounded bg-blue-50 p-2 text-sm text-blue-900">
                    💡 {q.explanation}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <Link to={back} className="mt-5 block text-center text-sm text-indigo-600">
          Topic par wapas
        </Link>
      </div>
    )
  }

  // ---------- Quiz chal raha hai ----------
  const q = questions[index]
  const isLast = index === questions.length - 1

  function pick(i) {
    const next = [...answers]
    next[index] = i
    setAnswers(next)
  }
  function toggleFlag() {
    const next = [...flags]
    next[index] = !next[index]
    setFlags(next)
  }

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-500">
          Sawal {index + 1} / {questions.length}
        </span>
        <span className={`font-bold ${secondsLeft <= 15 ? 'text-red-600' : 'text-indigo-600'}`}>
          ⏱ {fmt(secondsLeft)}
        </span>
      </div>

      <div className="mb-1 flex flex-wrap gap-1">
        {questions.map((_, n) => {
          let cls = 'bg-white'
          if (answers[n] !== null) cls = 'bg-indigo-100'
          if (flags[n]) cls = 'bg-amber-200'
          return (
            <button
              key={n}
              onClick={() => setIndex(n)}
              className={`h-8 w-8 rounded text-xs shadow-sm ${cls} ${
                n === index ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {n + 1}
            </button>
          )
        })}
      </div>
      <p className="mb-4 text-xs text-slate-400">
        Safed = baaki · Neela = jawab diya · Peela = flag
      </p>

      <h2 className="text-lg font-bold mb-3">{q.q}</h2>

      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            className={`block w-full rounded-lg border-2 p-3 text-left ${
              answers[index] === i
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-transparent bg-white shadow-sm'
            }`}
          >
            <b>{LETTERS[i]}.</b> {opt}
          </button>
        ))}
      </div>

      <button onClick={toggleFlag} className="mt-3 text-sm text-amber-700">
        {flags[index] ? '🚩 Flag hata do' : '⚑ Review ke liye flag karo'}
      </button>

      <div className="mt-4 flex gap-2">
        <button
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
          className="flex-1 rounded-lg bg-white py-2 shadow-sm disabled:opacity-40"
        >
          ← Previous
        </button>
        {isLast ? (
          <button onClick={trySubmit} className="flex-1 rounded-lg bg-green-600 py-2 font-semibold text-white">
            Submit ✓
          </button>
        ) : (
          <button
            onClick={() => setIndex(index + 1)}
            className="flex-1 rounded-lg bg-indigo-600 py-2 font-semibold text-white"
          >
            Next →
          </button>
        )}
      </div>

      {!isLast && (
        <button onClick={trySubmit} className="mt-3 w-full text-sm text-slate-500 underline">
          Abhi submit karo
        </button>
      )}
    </div>
  )
}