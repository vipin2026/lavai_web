import Home from "./pages/Home";
import Services from "./pages/Services";
import Pastexperience from "./pages/Pastexperience";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import WhatsApp from "./pages/servicesPages/channels/Whatsapp";
import Email from "./pages/servicesPages/channels/Email";
import Journey from "./pages/servicesPages/channels/Journey";
import Experimentation from "./pages/servicesPages/channels/Experimentation";
import Healthcare from "./pages/servicesPages/channels/HealthCare";
import Utils from "./pages/servicesPages/channels/Utils";
import PublicSector from "./pages/servicesPages/channels/PublicSector";
import FinancialServices from './pages/servicesPages/channels/FinancialServices'
import Sms from "./pages/servicesPages/channels/Sms";
import Seo from "./pages/servicesPages/channels/Seo";
import Linkedin from "./pages/servicesPages/channels/Linkedin";
import Webinars from "./pages/servicesPages/channels/Webinars";


const routes =[
    {path: "/", component:Home},
    {path:"services", component:Services},
    {path:"experience", component:Pastexperience},
    {path:"about", component:About},
    {path:"contact", component:Contact},
    {path:"login",component:Login},
    {path:"dashboard",component:Dashboard},
    {path:"/services/channels/whatsapp",component:WhatsApp},
    {path:"/services/channels/email",component:Email},
    {path:"/services/channels/sms",component:Sms},
    {path:"/services/channels/webinars",component:Webinars},
    {path:"/services/channels/linkedin-marketing",component:Linkedin},
    {path:"/services/channels/seo-optimization",component:Seo},
    {path:"/services/orchestration/journey-orchestration",component:Journey},
    {path:"/services/orchestration/experimentation",component:Experimentation},
    {path:"/services/vertical/utilities",component:Utils},
    {path:"/services/vertical/financial-services",component:FinancialServices},
    {path:"/services/vertical/public-sector",component:PublicSector},
    {path:"/services/vertical/healthcare",component:Healthcare},
    
    
   
];

export default  routes;