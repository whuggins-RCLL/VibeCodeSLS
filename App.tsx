import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import UnderstandingAPIs from './pages/UnderstandingAPIs'; 
import ModuleOne from './pages/ModuleOne';
import ModuleTwo from './pages/ModuleTwo';
import ModuleThree from './pages/ModuleThree';
import ModuleFour from './pages/ModuleFour';
import ModuleFive from './pages/ModuleFive';
import ModuleSix from './pages/ModuleSix';
import ModuleSeven from './pages/ModuleSeven';
import N8nCurriculum from './pages/N8nCurriculum';
import N8nModuleOne from './pages/N8nModuleOne';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
            {/* API Course Routes */}
            <Route path="/apis" element={<UnderstandingAPIs />} />
            <Route path="/apis/module-1" element={<ModuleOne />} />
            <Route path="/apis/module-2" element={<ModuleTwo />} />
            <Route path="/apis/module-3" element={<ModuleThree />} />
            <Route path="/apis/module-4" element={<ModuleFour />} />
            <Route path="/apis/module-5" element={<ModuleFive />} />
            <Route path="/apis/module-6" element={<ModuleSix />} />
            <Route path="/apis/module-7" element={<ModuleSeven />} />
            
            {/* n8n Course Routes */}
            <Route path="/n8n" element={<N8nCurriculum />} />
            <Route path="/n8n/module-1" element={<N8nModuleOne />} />

            {/* Legacy redirect for old bookmark safety (optional) */}
            <Route path="/module2" element={<ModuleTwo />} /> 
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;