import { useState } from 'react'

export default function Mistakes() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('mistakes') || '[]')
  )

  function clearAll() {
    localStorage.removeItem('mistakes')
    setItems([])
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-1">📓 Mistakes Diary</h2>
      <p className="text-sm text-slate-500 mb-4">{items.length} ghaltiyan save hain</p>

      {items.length === 0 && (
        <p className="rounded-lg bg-white p-4 shadow-sm">Abhi koi ghalti nahi. Shabash! 👏</p>
      )}

      <div className="space-y-3">
        {items.map((m, i) => (
          <div key={i} className="rounded-xl bg-white p-4 shadow-sm">
            <p className="font-semibold mb-2">{m.question}</p>
            <p className="text-sm text-red-600">❌ Aapka jawab: {m.yourAnswer}</p>
            <p className="text-sm text-green-700">✅ Sahi jawab: {m.correctAnswer}</p>
            <p className="mt-1 text-xs text-slate-400">{m.date}</p>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <button onClick={clearAll} className="mt-4 text-sm text-red-600 underline">
          Sab saaf karo
        </button>
      )}
    </div>
  )
}