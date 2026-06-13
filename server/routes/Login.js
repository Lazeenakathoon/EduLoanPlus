import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyLoan from "./pages/ApplyLoan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/apply-loan" element={<ApplyLoan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;