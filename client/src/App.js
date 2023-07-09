import {BrowserRouter,Routes,Route} from "react-router-dom";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Add from "./pages/Add";
import Form from "./pages/Form";
import NewStudentForm from "./pages/New"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Form/>}></Route>
    <Route path="/add" element={<Add/>}></Route>
    <Route path="/update" element={<Update/>}></Route>
   
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
