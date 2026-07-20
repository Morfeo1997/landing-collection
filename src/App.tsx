import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ManagePage from "./pages/ManagePage";
import LoopstudiosPage from "./pages/LoopstudiosPage";
import ShortlyPage from "./pages/ShortlyPage";
import InsurePage from "./pages/InsurePage";
import BlogrPage from "./pages/BlogrPage";
import DigitalBankPage from "./pages/DigitalBankPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
	
        <Route path="/manage" element={<ManagePage />} />
    
        <Route path="/loopstudios" element={<LoopstudiosPage />} />
    
        <Route path="/shortly" element={<ShortlyPage />} />
     
        <Route path="/insure" element={<InsurePage />} />
        
        <Route path="/blogr" element={<BlogrPage />} />
        
        <Route path="/digitalBank" element={<DigitalBankPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
