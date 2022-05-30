import './App.css'
import { AllRoutes } from './Pages/AllRoutes'
import { Dashboard } from './Pages/Dashboard'
import { Home } from './Pages/Home'
import { RegisterPageOne } from './Pages/RegisterPageOne'

function App() {

  return (
    <div className="App">
      {/* <RegisterPageOne/> */}
      <Dashboard/>
      <AllRoutes/>
    </div>
  )
}

export default App
