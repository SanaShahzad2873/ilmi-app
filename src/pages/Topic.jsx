import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { findTopic } from '../lib/store'
import { quizzes } from '../data/quizzes'

export default function Topic() {
  const { subjectId, topicId } = useParams()
  const [params] = useSearchParams()
  const year = params.get('year') || '1'
  const { topic } = findTopic(subjectId, topicId)

  // Topic badalne par video tab khud pehle par wapas aa jaye
  const [videoState, setVideoState] = useState({ id: topicId, index: 0 })
  const videoIndex = videoState.id === topicId ? videoState.index : 0

  if (!topic) {
    return <p>Topic nahi mila.</p>
  }

  const videos = topic.videos?.length
    ? topic.videos
    : [{ title: 'Video 1', videoId: topic.videoId || '' }]

  const current = videos[videoIndex] || videos[0]
  const qCount = (quizzes[topicId] || []).length
  const fCount = (topic.flashcards || []).length
  const base = `/subject/${subjectId}/topic/${topicId}`

  return (
    <div>
      <Link
        to={`/subject/${subjectId}?year=${year}`}
        className="text-sm text-indigo-600"
      >
        ← Wapas
      </Link>

      <h2 className="text-xl font-bold my-3">{topic.title}</h2>

      {topic.bookPage && (
        <p className="mb-3 text-xs text-slate-500">
          📖 Book: page {topic.bookPage}
        </p>
      )}

      {videos.length > 1 && (
        <div className="mb-3 flex gap-2 overflow-x-auto">
          {videos.map((video, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setVideoState({ id: topicId, index })}
              className={`whitespace-nowrap rounded-full px-3 py-1 text-sm ${
                index === videoIndex
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white shadow-sm'
              }`}
            >
              🎥 {video.title}
            </button>
          ))}
        </div>
      )}

      {current?.videoId ? (
        <div className="aspect-video mb-4">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${current.videoId}`}
            title={current.title || topic.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="aspect-video mb-4 rounded-xl bg-slate-300 flex items-center justify-center text-slate-600">
          Video jald aa rahi hai
        </div>
      )}

      <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
        <h3 className="font-semibold mb-2">📝 Notes</h3>
        <p className="leading-relaxed whitespace-pre-wrap">
          {topic.notes || 'Notes jald available honge.'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <ActionCard
          to={`${base}/flashcards?year=${year}`}
          icon="🗂️"
          title="Flashcards"
          sub={`${fCount} cards`}
          disabled={fCount === 0}
        />

        <ActionCard
          to={`${base}/quiz?year=${year}`}
          icon="📝"
          title="Practice Quiz"
          sub={`${qCount} sawal`}
          disabled={qCount === 0}
        />
      </div>
    </div>
  )
}

function ActionCard({ to, icon, title, sub, disabled }) {
  const cls = 'rounded-xl bg-white p-4 text-center shadow-sm'

  const inner = (
    <>
      <div className="text-2xl">{icon}</div>
      <p className="font-semibold">{title}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </>
  )

  if (disabled) {
    return <div className={`${cls} opacity-40`}>{inner}</div>
  }

  return (
    <Link to={to} className={`${cls} hover:bg-indigo-50`}>
      {inner}
    </Link>
  )
}