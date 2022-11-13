import {Route, Routes} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import ElementInfo from './components/ElementInfo';
import "./App.css";



  function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/element-info'  element={<ElementInfo />} />
          </Route>
        </Routes>
      </>
    )
  }

export default App
