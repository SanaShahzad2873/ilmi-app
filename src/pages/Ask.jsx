export default function Ask() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-1">🤖 Ask Ustaad Jee</h2>
      <p className="text-sm text-slate-500 mb-4">Apna sawal likho, AI ustaad jawab dega.</p>

      <textarea
        disabled
        rows={4}
        placeholder="Jaise: Ripple factor kya hota hai?"
        className="w-full rounded-lg border p-3 bg-slate-100"
      />
      <button disabled className="mt-3 w-full rounded-lg bg-slate-300 py-2 font-semibold text-white">
        Ask
      </button>

      <p className="mt-4 rounded-lg bg-amber-100 p-3 text-sm text-amber-800">
        Yeh feature agle step mein active hoga (AI jodne ke baad).
      </p>
    </div>
  )
}