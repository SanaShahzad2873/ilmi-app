import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { quizzes } from '../data/quizzes'

function saveMistake(item) {
  const old = JSON.parse(localStorage.getItem('mistakes') || '[]')
  localStorage.setItem('mistakes', JSON.stringify([item, ...old]))
}

export default function Quiz() {
  const { subjectId, topicId } = useParams()
  const [params] = useSearchParams()
  const year = params.get('year') || '1'
  const questions = quizzes[topicId] || []

  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const back = `/subject/${subjectId}/topic/${topicId}?year=${year}`

  if (questions.length === 0) {
    return (
      <div>
        <Link to={back} className="text-sm text-indigo-600">← Wapas</Link>
        <p className="mt-4 rounded-lg bg-amber-100 p-3 text-amber-800">
          Is topic ka quiz jald aa raha hai.
        </p>
      </div>
    )
  }

  if (done) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Quiz mukammal! 🎉</h2>
        <p className="text-4xl font-bold text-indigo-600 mb-4">
          {score} / {questions.length}
        </p>
        <Link to="/mistakes" className="block mb-3 text-indigo-600 underline">
          📓 Mistakes Diary dekho
        </Link>
        <Link to={back} className="rounded-lg bg-indigo-600 px-4 py-2 text-white">
          Topic par wapas
        </Link>
      </div>
    )
  }

  const q = questions[index]

  function choose(i) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.answer) {
      setScore(score + 1)
    } else {
      saveMistake({
        subjectId,
        topicId,
        question: q.q,
        yourAnswer: q.options[i],
        correctAnswer: q.options[q.answer],
        date: new Date().toLocaleDateString(),
      })
    }
  }

  function next() {
    if (index + 1 === questions.length) setDone(true)
    else {
      setIndex(index + 1)
      setPicked(null)
    }
  }

  return (
    <div>
      <p className="text-sm text-slate-500 mb-2">
        Sawal {index + 1} / {questions.length}
      </p>
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