import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./Footer";
import Header from "./pages/Header"
import style from "./pages/style.css"


export default function App() {
  return (
   
    
   <div>

    <Header></Header>
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <Footer/>


    </div>





  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);