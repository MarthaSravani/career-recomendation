import Header from "./components/Header";
import Home from "./pages/Home";
import CareerForm from "./pages/CareerForm";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <CareerForm />   {/* ✅ Add this */}
    </div>
  );
}

export default App;
