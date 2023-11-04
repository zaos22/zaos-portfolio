import Header from './Header/Header';
import Home from './Home/Home';
import Me from './Me/Me';
import Skills from './Skills/Skills';
import Education from './Education/Education';
import Projects from './Projects/Projects';
import './App.css';

function App() {
    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div>
                <Home></Home>
            </div>
            <div>
                <Me></Me>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Education></Education>
            </div>
            <div>
                <Projects></Projects>
            </div>
        </>
    );
}
export default App;