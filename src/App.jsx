import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import VaultDetail from './pages/VaultDetail.jsx';
import Positions from './pages/Positions.jsx';
import NotFound from './pages/NotFound.jsx';

/**
 * Root layout: persistent navbar/footer with routed page content.
 */
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vault/:id" element={<VaultDetail />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
