import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 text-neutral-400 flex flex-col p-2 overflow-hidden">
          This is the main section
        </div>
      </Router>
    </>
  )
}

export default App
