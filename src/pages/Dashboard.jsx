import { Link } from 'react-router-dom'
import { syllabus } from '../data/syllabus'
import { getAttempts, getMistakes, getStreak, getTier } from '../lib/store'

function Ring({ percent, size = 64 }) {
  const r = 26
  const c = 2 * Math.PI * r
  return (
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle cx="32" cy="32" r={r} fill="none" stroke="#e2e8f0" strokeWidth="6" />
      <circle
        cx="32" cy="32" r={r} fill="none" stroke="#6366f1" strokeWidth="6"
        strokeLinecap="round" strokeDasharray={c}
        strokeDashoffset={c * (1 - percent / 100)}
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="36" textAnchor="middle" fontSize="13" fontWeight="700" fill="#334155">
        {percent}%
      </text>
    </svg>
  )
}

export default function Dashboard() {
  const attempts = getAttempts()
  const mistakes = getMistakes()

  const totalQ = attempts.reduce((s, a) => s + a.total, 0)
  const totalCorrect = attempts.reduce((s, a) => s + a.score, 0)
  const avg = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0
  const streak = getStreak(attempts)
  const overall = getTier(attempts.length)

  const perSubject = syllabus
    .map((s) => {
      const list = attempts.filter((a) => a.subjectId === s.id)
      const q = list.reduce((sum, a) => sum + a.total, 0)
      const c = list.reduce((sum, a) => sum + a.score, 0)
      return { ...s, count: list.length, avg: q ? Math.round((c / q) * 100) : 0, tier: getTier(list.length) }
    })
    .filter((s) => s.count > 0)

  // Focus Areas: topics jinka average 85% se kam hai
  const byTopic = {}
  attempts.forEach((a) => {
    const t = (byTopic[a.topicId] = byTopic[a.topicId] || {
      topicId: a.topicId, subjectId: a.subjectId, title: a.topicTitle || a.topicId,
      score: 0, total: 0, count: 0,
    })
    t.score += a.score
    t.total += a.total
    t.count += 1
  })
  const focus = Object.values(byTopic)
    .map((t) => ({ ...t, avg: t.total ? Math.round((t.score / t.total) * 100) : 0 }))
    .filter((t) => t.avg < 85)
    .sort((a, b) => a.avg - b.avg)
    .slice(0, 3)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📊 Dashboard</h2>

      <div className="mb-4 rounded-xl bg-indigo-600 p-4 text-white">
        <p className="text-sm opacity-80">Aapka tier</p>
        <p className="text-2xl font-bold">{overall.emoji} {overall.name}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <Stat label="Quizzes complete" value={attempts.length} />
        <Stat label="Average score" value={`${avg}%`} />
        <Stat label="🔥 Streak (din)" value={streak} />
        <Stat label="Ghaltiyan save" value={mistakes.length} />
      </div>

      <h3 className="font-semibold mb-2">🎓 My Grades</h3>
      {perSubject.length === 0 ? (
        <p className="mb-5 rounded-lg bg-white p-4 shadow-sm">
          Abhi koi quiz nahi diya. Kisi topic par ja kar quiz shuru karo!{' '}
          <Link to="/" className="text-indigo-600 underline">Home</Link>
        </p>
      ) : (
        <div className="mb-5 rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex justify-center"><Ring percent={avg} size={96} /></div>
          <div className="grid grid-cols-2 gap-4">
            {perSubject.map((s) => (
              <div key={s.id} className="flex items-center gap-3">
                <Ring percent={s.avg} />
                <div>
                  <p className="text-sm font-semibold">{s.name}</p>
                  <p className="text-xs text-slate-500">{s.tier.emoji} {s.tier.name} · {s.count} quizzes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h3 className="font-semibold mb-2">🎯 Focus Areas</h3>
      <p className="mb-2 text-xs text-slate-500">Woh topics jahan aapka average 85% se kam hai.</p>
      {focus.length === 0 ? (
        <p className="rounded-lg bg-white p-4 text-sm shadow-sm">
          {attempts.length === 0 ? 'Quiz dene ke baad yahan kamzor topics nazar aayenge.' : 'Shabash! Koi kamzor topic nahi. 🎉'}
        </p>
      ) : (
        <div className="space-y-3">
          {focus.map((t) => (
            <Link
              key={t.topicId}
              to={`/subject/${t.subjectId}/topic/${t.topicId}?year=1`}
              className="block rounded-xl border border-red-200 bg-red-50 p-4"
            >
              <p className="font-semibold">{t.title}</p>
              <p className="text-2xl font-bold text-red-600">{t.avg}%</p>
              <p className="text-xs text-slate-500">Average · {t.count} quiz</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <p className="text-2xl font-bold text-indigo-600">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  )
}