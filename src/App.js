import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Users from "./pages/users/Users"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Users />
      <Footer />
    </div>
  );
}

export default App;
