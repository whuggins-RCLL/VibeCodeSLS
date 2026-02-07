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
import GithubPortfolio from './pages/GithubPortfolio';
import GithubPortfolioPart1 from './pages/GithubPortfolioPart1';
import GithubPortfolioPart2 from './pages/GithubPortfolioPart2';
import GithubPortfolioPart3 from './pages/GithubPortfolioPart3';
import GithubPortfolioPart4 from './pages/GithubPortfolioPart4';
import GithubPortfolioPart5 from './pages/GithubPortfolioPart5';
import GithubPortfolioPart6 from './pages/GithubPortfolioPart6';
import GithubPortfolioPart7 from './pages/GithubPortfolioPart7';
import GithubPortfolioPart8 from './pages/GithubPortfolioPart8';
import GithubPortfolioPart9 from './pages/GithubPortfolioPart9';
import GithubPortfolioPart10 from './pages/GithubPortfolioPart10';
import GithubPortfolioPart11 from './pages/GithubPortfolioPart11';
import GithubPortfolioPart12 from './pages/GithubPortfolioPart12';
import GithubPortfolioPart13 from './pages/GithubPortfolioPart13';
import GithubPortfolioPart14 from './pages/GithubPortfolioPart14';
import GithubPortfolioPart15 from './pages/GithubPortfolioPart15';
import GithubPortfolioPart16 from './pages/GithubPortfolioPart16';
import GithubPortfolioPart17 from './pages/GithubPortfolioPart17';
import GithubPortfolioPart18 from './pages/GithubPortfolioPart18';

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

            {/* GitHub Portfolio */}
            <Route path="/github" element={<GithubPortfolio />} />
            <Route path="/github/part-1" element={<GithubPortfolioPart1 />} />
            <Route path="/github/part-2" element={<GithubPortfolioPart2 />} />
            <Route path="/github/part-3" element={<GithubPortfolioPart3 />} />
            <Route path="/github/part-4" element={<GithubPortfolioPart4 />} />
            <Route path="/github/part-5" element={<GithubPortfolioPart5 />} />
            <Route path="/github/part-6" element={<GithubPortfolioPart6 />} />
            <Route path="/github/part-7" element={<GithubPortfolioPart7 />} />
            <Route path="/github/part-8" element={<GithubPortfolioPart8 />} />
            <Route path="/github/part-9" element={<GithubPortfolioPart9 />} />
            <Route path="/github/part-10" element={<GithubPortfolioPart10 />} />
            <Route path="/github/part-11" element={<GithubPortfolioPart11 />} />
            <Route path="/github/part-12" element={<GithubPortfolioPart12 />} />
            <Route path="/github/part-13" element={<GithubPortfolioPart13 />} />
            <Route path="/github/part-14" element={<GithubPortfolioPart14 />} />
            <Route path="/github/part-15" element={<GithubPortfolioPart15 />} />
            <Route path="/github/part-16" element={<GithubPortfolioPart16 />} />
            <Route path="/github/part-17" element={<GithubPortfolioPart17 />} />
            <Route path="/github/part-18" element={<GithubPortfolioPart18 />} />

            {/* Legacy redirect for old bookmark safety (optional) */}
            <Route path="/module2" element={<ModuleTwo />} /> 
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;