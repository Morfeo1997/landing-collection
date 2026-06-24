import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
{/* import RestaurantLanding from "./pages/RestaurantLanding";
	import GymLanding from "./pages/GymLanding";
	import SaaSLanding from "./pages/SaaSLanding";
	import RealEstateLanding from "./pages/RealEstateLanding";

*/}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
	{/*
        <Route path="/restaurant" element={<RestaurantLanding />} />
        <Route path="/gym" element={<GymLanding />} />
        <Route path="/saas" element={<SaaSLanding />} />
        <Route path="/real-estate" element={<RealEstateLanding />} />
        
     */}
      </Routes>
    </BrowserRouter>
  );
}
