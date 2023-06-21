import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";

function App(){
  return (
    <Router>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router> 
  );
}

export default App


// Routes se upar Header ka mtlb ye hai ki Header har page pe show ho rha hai