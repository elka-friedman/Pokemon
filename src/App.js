// import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./Pokemon";
import Counter from "./Counter"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//   <>
//     <Pokemon />
//     <Counter />
//   </>
//   );
// }

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </Router>
  )
}

export default App;
