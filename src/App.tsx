import { useState, useEffect } from 'react'
import { LanguageProvider } from './contexts/LanguageContext.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Services from './components/Services.tsx'
import Stories from './components/Stories.tsx'
import Contacts from './components/Contacts.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About onNavigate={setCurrentPage} />
      case 'services':
        return <Services onNavigate={setCurrentPage} />
      case 'stories':
        return <Stories onNavigate={setCurrentPage} />
      case 'contacts':
        return <Contacts onNavigate={setCurrentPage} />
      case 'home':
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <LanguageProvider>
      <div className="App">
        {renderPage()}
      </div>
    </LanguageProvider>
  )
}

export default App
