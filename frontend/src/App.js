import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SignUp from "./screens/SignUp";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path = '/' component={HomeScreen} exact />
          <Route path = '/product/:id' component={ProductScreen} />
          <Route path = '/register' component={SignUp} />
          <Route path = '/sign-in' component={LoginScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
