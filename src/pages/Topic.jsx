import { Link, useParams, useSearchParams } from 'react-router-dom'
import { syllabus } from '../data/syllabus'

export default function Topic() {
  const { subjectId, topicId } = useParams()
  const [params] = useSearchParams()
  const year = params.get('year') || '1'

  const subject = syllabus.find((s) => s.id === subjectId)
  const topic = Object.values(subject?.years || {})
    .flat()
    .flatMap((c) => c.topics)
    .find((t) => t.id === topicId)

  if (!topic) return <p>Topic nahi mila.</p>

  return (
    <div>
      <Link to={`/subject/${subjectId}?year=${year}`} className="text-sm text-indigo-600">
        ← Wapas
      </Link>
      <h2 className="text-xl font-bold my-3">{topic.title}</h2>

      {topic.videoId ? (
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${topic.videoId}`}
            title={topic.title}
            allowFullScreen
          />
        </div>
      ) : (
        <div className="aspect-video mb-4 rounded-xl bg-slate-300 flex items-center justify-center text-slate-600">
          Video jald aa rahi hai
        </div>
      )}

      <div className="rounded-xl bg-white p-4 shadow-sm">
        <h3 className="font-semibold mb-2">📝 Notes</h3>
        <p className="leading-relaxed">{topic.notes}</p>
      </div>

      <Link
        to={`/subject/${subjectId}/topic/${topicId}/quiz?year=${year}`}
        className="mt-4 block rounded-lg bg-indigo-600 py-3 text-center font-semibold text-white"
      >
        📝 Quiz do
      </Link>
    </div>
  )
}