import { useState } from 'react'

import NewStudentForm from './components/NewStudentForm.jsx'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  return(
  <NewStudentForm/>
  
  );
}

export default App
