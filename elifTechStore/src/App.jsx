import { BrowserRouter } from 'react-router-dom';
import Header from './shared/Header';
import Router from './router';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  )
}

export default App
