import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Subject from './pages/Subject'
import Topic from './pages/Topic'
import Quiz from './pages/Quiz'
import Mistakes from './pages/Mistakes'

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between bg-indigo-600 p-4 text-white shadow">
        <Link to="/" className="text-lg font-bold">📚 Ilmi App</Link>
        <Link to="/mistakes" className="text-sm">📓 Mistakes</Link>
      </header>
      <main className="max-w-xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subject/:subjectId" element={<Subject />} />
          <Route path="/subject/:subjectId/topic/:topicId" element={<Topic />} />
          <Route path="/subject/:subjectId/topic/:topicId/quiz" element={<Quiz />} />
          <Route path="/mistakes" element={<Mistakes />} />
        </Routes>
      </main>
    </div>
  )
}