import { syllabus } from '../data/syllabus'

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback
  } catch {
    return fallback
  }
}
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

// ---------- Mistakes ----------
export function getMistakes() {
  return read('mistakes', []).map((m, i) => ({ ...m, id: m.id ?? `old-${i}` }))
}
export function setMistakes(list) {
  write('mistakes', list)
}
export function addMistake(item) {
  const list = getMistakes()
  const existing = list.find(
    (m) => m.topicId === item.topicId && m.question === item.question
  )
  if (existing) {
    existing.count = (existing.count || 1) + 1
    existing.yourAnswer = item.yourAnswer
    existing.date = item.date
    setMistakes(list)
  } else {
    setMistakes([
      { ...item, id: `${Date.now()}-${Math.random()}`, flagged: false, count: 1 },
      ...list,
    ])
  }
}

// ---------- Quiz attempts ----------
export function getAttempts() {
  return read('attempts', [])
}
export function addAttempt(attempt) {
  write('attempts', [attempt, ...getAttempts()])
}

// ---------- Tier ----------
export function getTier(quizCount) {
  if (quizCount >= 20) return { name: 'Platinum', emoji: '💎' }
  if (quizCount >= 10) return { name: 'Gold', emoji: '🥇' }
  if (quizCount >= 5) return { name: 'Silver', emoji: '🥈' }
  if (quizCount >= 1) return { name: 'Bronze', emoji: '🥉' }
  return { name: 'Unranked', emoji: '⚪' }
}

// ---------- Streak (lagatar kitne din quiz diya) ----------
export function getStreak(attempts) {
  const days = new Set(attempts.map((a) => new Date(a.ts).toDateString()))
  const d = new Date()
  if (!days.has(d.toDateString())) d.setDate(d.getDate() - 1)
  let streak = 0
  while (days.has(d.toDateString())) {
    streak++
    d.setDate(d.getDate() - 1)
  }
  return streak
}

// ---------- Syllabus helper ----------
export function findTopic(subjectId, topicId) {
  const subject = syllabus.find((s) => s.id === subjectId)
  if (!subject) return {}
  for (const chapters of Object.values(subject.years)) {
    for (const chapter of chapters) {
      const topic = chapter.topics.find((t) => t.id === topicId)
      if (topic) return { subject, chapter, topic }
    }
  }
  return { subject }
}