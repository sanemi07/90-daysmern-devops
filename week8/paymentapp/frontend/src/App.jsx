import {BrowserRouter, Route, Routes} from  "react-router-dom"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUP"
import DashBoard from "./pages/DashBoard"
import Transfer from "./pages/Transfer"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignUp/>}/>
       <Route path="/signin" element={<SignIn/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
         <Route path="/transfer" element={<Transfer/>}/>
    </Routes>
   
    
    </BrowserRouter>
    </>
  )
}

export default App
