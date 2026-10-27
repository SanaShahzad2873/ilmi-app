import { useState } from 'react'
import { Link } from 'react-router-dom'
import { syllabus } from '../data/syllabus'

export default function Home() {
  const [year, setYear] = useState(1)

  return (
    <div>
      <div className="flex gap-2 mb-5">
        {[1, 2].map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`flex-1 rounded-lg py-2 font-semibold ${
              year === y ? 'bg-indigo-600 text-white' : 'bg-white shadow'
            }`}
          >
            {y === 1 ? '1st Year' : '2nd Year'}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Apna subject chunein</h2>
      <div className="grid grid-cols-2 gap-3">
        {syllabus.map((s) => (
          <Link
            key={s.id}
            to={`/subject/${s.id}?year=${year}`}
            className="rounded-xl bg-white p-5 shadow text-center font-semibold hover:bg-indigo-50"
          >
            <div className="text-3xl mb-1">{s.emoji}</div>
            {s.name}
          </Link>
        ))}
      </div>
    </div>
  )
}