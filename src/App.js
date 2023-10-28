import Header from './Header/Header';
import Home from './Home/Home';
import Me from './Me/Me';
import Skills from './Skills/Skills';
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
        </>
    );
}
export default App;