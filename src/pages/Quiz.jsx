import { useEffect, useState } from 'react'
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

function fmt(s) {
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${String(r).padStart(2, '0')}`
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
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)

  function countFor(key) {
    return key === 'all'
      ? allQuestions.length
      : allQuestions.filter((q) => q.difficulty === key).length
  }

  function start(key) {
    const qs =
      key === 'all' ? allQuestions : allQuestions.filter((q) => q.difficulty === key)
    if (qs.length === 0) return
    setLevel(key)
    setQuestions(qs)
    setIndex(0)
    setPicked(null)
    setScore(0)
    setSecondsLeft(qs.length * SECONDS_PER_Q)
    setStage('play')
  }

  function finish(finalScore) {
    addAttempt({
      subjectId,
      topicId,
      topicTitle: info.topic?.title || topicId,
      level,
      score: finalScore,
      total: questions.length,
      ts: Date.now(),
    })
    setStage('done')
  }

  // Timer
  useEffect(() => {
    if (stage !== 'play') return
    if (secondsLeft <= 0) {
      finish(score)
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

  // ---------- Difficulty chunne wali screen ----------
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
            <li>Ek hi jawab chun sakte ho</li>
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

  // ---------- Result screen ----------
  if (stage === 'done') {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Quiz mukammal! 🎉</h2>
        <p className="text-4xl font-bold text-indigo-600">
          {score} / {questions.length}
        </p>
        <p className="mb-5 text-slate-500">{percent}% score</p>

        <div className="space-y-2">
          <Link to="/mistakes" className="block rounded-lg bg-white p-3 shadow-sm">
            📓 Mistakes Diary dekho
          </Link>
          <Link to="/dashboard" className="block rounded-lg bg-white p-3 shadow-sm">
            📊 Dashboard dekho
          </Link>
          <button
            onClick={() => setStage('pick')}
            className="block w-full rounded-lg bg-indigo-600 p-3 text-white"
          >
            Dobara quiz do
          </button>
          <Link to={back} className="block text-sm text-indigo-600">
            Topic par wapas
          </Link>
        </div>
      </div>
    )
  }

  // ---------- Quiz chal raha hai ----------
  const q = questions[index]

  function choose(i) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.answer) {
      setScore(score + 1)
    } else {
      addMistake({
        subjectId,
        topicId,
        topicTitle: info.topic?.title || topicId,
        chapterTitle: info.chapter?.title || '',
        question: q.q,
        yourAnswer: q.options[i],
        correctAnswer: q.options[q.answer],
        date: new Date().toLocaleDateString(),
      })
    }
  }

  function next() {
    if (index + 1 === questions.length) finish(score)
    else {
      setIndex(index + 1)
      setPicked(null)
    }
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-slate-500">
          Sawal {index + 1} / {questions.length}
        </span>
        <span className={`font-bold ${secondsLeft <= 15 ? 'text-red-600' : 'text-indigo-600'}`}>
          ⏱ {fmt(secondsLeft)}
        </span>
      </div>

      <h2 className="text-lg font-bold mb-4">{q.q}</h2>

      <div className="space-y-2">
        {q.options.map((opt, i) => {
          let style = 'bg-white'
          if (picked !== null) {
            if (i === q.answer) style = 'bg-green-200'
            else if (i === picked) style = 'bg-red-200'
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              className={`block w-full rounded-lg p-3 text-left shadow-sm ${style}`}
            >
              {opt}
            </button>
          )
        })}
      </div>

      {picked !== null && (
        <button
          onClick={next}
          className="mt-4 w-full rounded-lg bg-indigo-600 py-2 font-semibold text-white"
        >
          {index + 1 === questions.length ? 'Result dekho' : 'Agla sawal'}
        </button>
      )}
    </div>
  )
}