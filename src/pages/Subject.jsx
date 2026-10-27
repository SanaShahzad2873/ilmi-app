import { Link, useParams, useSearchParams } from 'react-router-dom'
import { syllabus } from '../data/syllabus'

export default function Subject() {
  const { subjectId } = useParams()
  const [params] = useSearchParams()
  const year = params.get('year') || '1'
  const subject = syllabus.find((s) => s.id === subjectId)

  if (!subject) return <p>Subject nahi mila.</p>

  const chapters = subject.years[year] || []

  return (
    <div>
      <Link to="/" className="text-sm text-indigo-600">← Wapas</Link>
      <h2 className="text-xl font-bold my-3">
        {subject.emoji} {subject.name}
        <span className="text-sm font-normal text-slate-500"> ({year === '1' ? '1st' : '2nd'} Year)</span>
      </h2>

      {chapters.length === 0 && (
        <p className="rounded-lg bg-amber-100 p-3 text-amber-800">
          Is subject ke chapters jald add honge.
        </p>
      )}

      {chapters.map((ch) => (
        <div key={ch.id} className="mb-5">
          <h3 className="font-semibold text-indigo-700 mb-2">{ch.title}</h3>
          <div className="space-y-2">
            {ch.topics.map((t) => (
              <Link
                key={t.id}
                to={`/subject/${subject.id}/topic/${t.id}?year=${year}`}
                className="block rounded-lg bg-white p-3 shadow-sm hover:bg-indigo-50"
              >
                {t.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}