import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/accueil";
import Note from "./components/note";
import Author from "./components/author";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/notes" element={<Note />} />
        <Route path="/authors" element={<Author />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;