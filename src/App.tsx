import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChange } from './utils/supabaseClient'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import NewShipment from './pages/NewShipment'
import History from './pages/History'
import Templates from './pages/Templates'
import Settings from './pages/Settings'

function App() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { data: { subscription } } = onAuthStateChange((session) => {
      setSession(session)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={session ? <Navigate to="/dashboard" replace /> : <Landing />} 
        />
        <Route 
          path="/dashboard" 
          element={session ? <Dashboard /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/new-shipment" 
          element={session ? <NewShipment /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/history" 
          element={session ? <History /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/templates" 
          element={session ? <Templates /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/settings" 
          element={session ? <Settings /> : <Navigate to="/" replace />} 
        />
      </Routes>
    </Router>
  )
}

export default App
