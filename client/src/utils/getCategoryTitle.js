// Function that takes url search and returns the title for the relevant category page

const getCategoryTitle = (search) => {
  switch (search) {
    case 'web-design':
      return 'Web Design'
    case 'video-animation':
      return 'Video & Animation'
    case 'writing-translation':
      return 'Writing & Translation'
    case 'ai-services':
      return 'AI Services'
    case 'digital-marketing':
      return 'Digital Marketing'
    case 'music-audio':
      return 'Music & Audio'
    case 'all':
      return 'All Categories'
    default:
      return `Search : '${search}'`
  }
}

export default getCategoryTitle
