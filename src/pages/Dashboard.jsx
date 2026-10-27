import { Link } from 'react-router-dom'
import { syllabus } from '../data/syllabus'
import { getAttempts, getMistakes, getStreak, getTier } from '../lib/store'

export default function Dashboard() {
  const attempts = getAttempts()
  const mistakes = getMistakes()

  const totalQ = attempts.reduce((sum, a) => sum + a.total, 0)
  const totalCorrect = attempts.reduce((sum, a) => sum + a.score, 0)
  const avg = totalQ ? Math.round((totalCorrect / totalQ) * 100) : 0
  const streak = getStreak(attempts)
  const overall = getTier(attempts.length)

  const perSubject = syllabus
    .map((s) => {
      const list = attempts.filter((a) => a.subjectId === s.id)
      const q = list.reduce((sum, a) => sum + a.total, 0)
      const c = list.reduce((sum, a) => sum + a.score, 0)
      return {
        ...s,
        count: list.length,
        avg: q ? Math.round((c / q) * 100) : 0,
        tier: getTier(list.length),
      }
    })
    .filter((s) => s.count > 0)

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📊 Dashboard</h2>

      <div className="mb-4 rounded-xl bg-indigo-600 p-4 text-white">
        <p className="text-sm opacity-80">Aapka tier</p>
        <p className="text-2xl font-bold">
          {overall.emoji} {overall.name}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <Stat label="Quizzes complete" value={attempts.length} />
        <Stat label="Average score" value={`${avg}%`} />
        <Stat label="🔥 Streak (din)" value={streak} />
        <Stat label="Ghaltiyan save" value={mistakes.length} />
      </div>

      <h3 className="font-semibold mb-2">Subject-wise</h3>
      {perSubject.length === 0 && (
        <p className="rounded-lg bg-white p-4 shadow-sm">
          Abhi koi quiz nahi diya. Kisi topic par ja kar quiz shuru karo!{' '}
          <Link to="/" className="text-indigo-600 underline">Home</Link>
        </p>
      )}
      <div className="space-y-3">
        {perSubject.map((s) => (
          <div key={s.id} className="rounded-xl bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{s.emoji} {s.name}</p>
              <p className="text-sm">{s.tier.emoji} {s.tier.name}</p>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-indigo-500"
                style={{ width: `${s.avg}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Average {s.avg}% · {s.count} quizzes
            </p>
          </div>
        ))}
      </div>
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