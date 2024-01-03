import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./pages/Home/home.js"
import Login from "./pages/Login/login.js"
import QuemSomos from "./pages/QuemSomos/quemSomos.js"
import PageNotFound from "./pages/NotFound/notfound.js";
import CadastroPage from "./pages/Cadastro/cadastro.js";
import ClienteDashBoard from "./pages/ClienteDashBoard/clienteDashBoard.js";
import Exchange from "./pages/Exchange/exchange.js";


function AppRouts(){
    return(
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home/>} ></Route>
                <Route path="/QuemSomos" element={<QuemSomos/>} ></Route>
                <Route path="/login" element={<Login/>} ></Route>
                <Route path="*" element={<PageNotFound/>} ></Route>
                <Route path="/cadastro" element={<CadastroPage/>} ></Route>
                <Route path="/clienteDashBoard" element={<ClienteDashBoard/>} ></Route>
                <Route path="/exchange" element={<Exchange/>} ></Route>
            </Routes>
        
        
        </BrowserRouter>
    )
}


export default AppRouts