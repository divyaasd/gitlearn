import RegisterPage from "./pages/register";
import Dashboard from "./dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>


      </BrowserRouter>
    
    </div>
  );
}

export default App;
