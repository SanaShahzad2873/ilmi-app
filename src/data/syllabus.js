// years: 1 = 1st Year (11th), 2 = 2nd Year (12th)
// chapters ko apni PCTB book ki index se bharo

export const syllabus = [
  { id: 'math', name: 'Mathematics', emoji: '📐', years: { 1: [], 2: [] } },
  { id: 'physics', name: 'Physics', emoji: '⚛️', years: { 1: [], 2: [] } },
  {
    id: 'biology',
    name: 'Biology',
    emoji: '🧬',
    years: {
      1: [
        {
          id: 'bio-1',
          title: 'Biodiversity and Classification',
          topics: [
            { id: 'bio-1-1', title: 'Introduction', videoId: '', notes: 'Notes yahan likho.' },
          ],
        },
        {
          id: 'bio-2',
          title: 'Bacteria and Viruses',
          topics: [
            { id: 'bio-2-1', title: 'Introduction', videoId: '', notes: 'Notes yahan likho.' },
          ],
        },
      ],
      2: [],
    },
  },
  { id: 'chemistry', name: 'Chemistry', emoji: '🧪', years: { 1: [], 2: [] } },
  { id: 'computer', name: 'Computer Science', emoji: '💻', years: { 1: [], 2: [] } },
  { id: 'english', name: 'English', emoji: '📖', years: { 1: [], 2: [] } },
  { id: 'urdu', name: 'Urdu', emoji: '✍️', years: { 1: [], 2: [] } },
  { id: 'islamiyat', name: 'Islamiyat', emoji: '🕌', years: { 1: [], 2: [] } },
  { id: 'pakstudies', name: 'Pakistan Studies', emoji: '🇵🇰', years: { 1: [], 2: [] } },
]