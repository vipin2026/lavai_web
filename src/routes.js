import Home from "./pages/Home";
import Services from "./pages/Services";
import Pastexperience from "./pages/Pastexperience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Dashboard from "./pages/Admin/Dashboard/Dashboard";


const routes =[
    {path: "/", component:Home},
    {path:"services", component:Services},
    {path:"experience", component:Pastexperience},
    {path:"about", component:About},
    {path:"contact", component:Contact},
    {path:"login",component:Login},
    {path:"dashboard",component:Dashboard}
    
   
];

export default  routes;