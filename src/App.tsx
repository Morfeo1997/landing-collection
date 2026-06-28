import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ManagePage from "./pages/ManagePage";
import LoopstudiosPage from "./pages/LoopstudiosPage";
	{/* import SaaSLanding from "./pages/SaaSLanding";
	import RealEstateLanding from "./pages/RealEstateLanding";

*/}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
	
        <Route path="/manage" element={<ManagePage />} />
    
        <Route path="/loopstudios" element={<LoopstudiosPage />} />
    {/*
        <Route path="/saas" element={<SaaSLanding />} />
        <Route path="/real-estate" element={<RealEstateLanding />} />
        
     */}
      </Routes>
    </BrowserRouter>
  );
}
