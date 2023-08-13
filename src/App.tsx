import "./App.css";
import { PokeListPage } from "./pages/PokeList";
import NavBar from "./components/nav/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <PokeListPage />
    </div>
  );
}

export default App;
