// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About'; 
import Contact from './component/Contact'; 
import Counter from './component/Counter';
import Login from './component/Login';


const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Navbar, Nav } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Navbar.Brand href="#home">Your University</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#login">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* Your content goes here */}
//     </div>
//   );
// }

// export default App;
