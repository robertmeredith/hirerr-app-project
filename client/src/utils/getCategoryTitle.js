// Function that takes url search and returns the title for the relevant category page

const getCategoryTitle = (search) => {
  return categoryTitles[search]
}

const categoryTitles = {
  'web-design': 'Web Design',
  'video-animation': 'Video & Animation',
  'writing-translation': 'Writing & Translation',
  'ai-services': 'AI Services',
  'digital-marketing': 'Digital Marketing',
  'music-audio': 'Music & Audio',
  'all': 'All Categories'
}

export default getCategoryTitle