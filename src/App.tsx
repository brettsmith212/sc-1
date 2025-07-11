import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { onAuthStateChange } from './utils/supabaseClient'
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import NewShipment from './pages/NewShipment'
import History from './pages/History'
import Templates from './pages/Templates'
import Settings from './pages/Settings'
import Support from './pages/Support'

function App() {
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar - only show for logged-in users */}
        {session && (
          <Sidebar 
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            isCollapsed={isSidebarCollapsed}
            onToggleCollapse={toggleSidebarCollapse}
          />
        )}

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar onToggleSidebar={toggleSidebar} />
          
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route 
                path="/" 
                element={session ? <Navigate to="/dashboard" replace /> : (
                  <div className="min-h-screen">
                    <Landing />
                  </div>
                )} 
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
              <Route 
                path="/support" 
                element={
                  <PrivateRoute>
                    <Support />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </div>
      
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
