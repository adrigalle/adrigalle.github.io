import NavBar from './components/navbar/navbar';
import Projects from './components/projects';
import Home from './components/home';
import NotFound from './components/notFound';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className="content">
          <Routes>

            <Route exact    path="/"                element={ <Home /> } />
            <Route exact    path="/projects"        element={ <Projects /> } />
            <Route          path="*"                element={ <NotFound /> } />

          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;