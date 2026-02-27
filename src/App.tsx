import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import EmrEntry from './components/EmrEntry';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page - No Layout wrapper */}
        <Route path="/" element={<LandingPage />} />

        {/* App Pages - With Layout wrapper */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/entry" element={<Layout><EmrEntry /></Layout>} />
        <Route path="/settings" element={<Layout><div className="p-8 text-zinc-500">Settings module coming soon...</div></Layout>} />
      </Routes>
    </Router>
  );
}
