import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { onAuthStateChange } from './utils/supabaseClient'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
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
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={session ? <Navigate to="/dashboard" replace /> : <Landing />} 
        />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/new-shipment" 
          element={
            <PrivateRoute>
              <NewShipment />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/history" 
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/templates" 
          element={
            <PrivateRoute>
              <Templates />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          } 
        />
      </Routes>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </Router>
  )
}

export default App
