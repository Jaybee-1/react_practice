import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Pages/Contact'
import About from './Pages/About'
// import Button from 'react-bootstrap';
function App() {
  return(
    <>
      <h2>App Component</h2>
      {/* <Button className='bg-primary'>Primary</Button>{' '} */}
      <Contact/>
      <About/>
    </>
  )
} 
export default App;