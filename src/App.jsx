import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Subject from './pages/Subject'
import Topic from './pages/Topic'
import Quiz from './pages/Quiz'
import Mistakes from './pages/Mistakes'
import Dashboard from './pages/Dashboard'
import Ask from './pages/Ask'

const tabs = [
  { to: '/', label: 'Home', icon: '🏠', end: true },
  { to: '/ask', label: 'Ustaad Jee', icon: '🤖' },
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { to: '/mistakes', label: 'Mistakes', icon: '📓' },
]

export default function App() {
  return (
    <div className="min-h-screen pb-20">
      <header className="bg-indigo-600 p-4 text-white shadow">
        <Link to="/" className="text-lg font-bold">📚 Ilmi App</Link>
      </header>

      <main className="max-w-xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subjectId" element={<Subject />} />
          <Route path="/subject/:subjectId/topic/:topicId" element={<Topic />} />
          <Route path="/subject/:subjectId/topic/:topicId/quiz" element={<Quiz />} />
          <Route path="/mistakes" element={<Mistakes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ask" element={<Ask />} />
        </Routes>
      </main>

      <nav className="fixed bottom-0 inset-x-0 flex border-t bg-white">
        {tabs.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) =>
              `flex-1 py-2 text-center text-xs ${
                isActive ? 'font-semibold text-indigo-600' : 'text-slate-500'
              }`
            }
          >
            <div className="text-lg">{t.icon}</div>
            {t.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}