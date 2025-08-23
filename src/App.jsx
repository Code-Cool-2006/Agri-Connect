import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Terms from "./pages/Terms";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import PriceCalculator from "./pages/PriceCalculator";
import DeliveryTracking from "./pages/DeliveryTracking";
import Equipment from "./pages/Equipment";
import CertifiedEquipmentCard from "./pages/CertifiedEquipmentCard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/price-calculator" element={<PriceCalculator />} />
        <Route path="/delivery-tracking" element={<DeliveryTracking />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route
          path="/certified-equipment"
          element={
            <ProtectedRoute>
              <CertifiedEquipmentCard />
            </ProtectedRoute>
          }
        />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;
