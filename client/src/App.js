import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home, Contact, NotFoundPage, Article, Login, Register } from "./pages/index";
import { Footer, Navbar } from "./components/index";

function App() {
/**
 * ! Creating routes
 */
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:articleName" element={<Article />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
