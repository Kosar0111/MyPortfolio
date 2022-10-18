import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Main from './pages/Main/Main'
import Explore from './pages/Explore/Explore'
import Messages from './pages/Messages/Messages'
import Notfoundpage from './pages/Notfoundpage'
import Saved from './pages/Saved/Saved'
import Settings from './pages/Settin/Settings'
import Subscribers from './pages/Subscriders/Subscribers'
import Subscriptions from './pages/Subscriptions/Subscriptions'
import MessageAbout from './pages/MessageAbout/MessageAbout'
import NewMessages from './pages/NewMessages/NewMessages'
import LoginPage from './pages/Login/LoginPage'

import RequireAth from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Router></Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="explore" element={<Explore />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:id" element={<MessageAbout />} />
          <Route
            path="messages/new"
            element={
              <RequireAth>
                <NewMessages />
              </RequireAth>
            }
          />
          <Route path="saved" element={<Saved />} />
          <Route path="settings" element={<Settings />} />
          <Route path="subscribers" element={<Subscribers />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
