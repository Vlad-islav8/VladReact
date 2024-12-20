import './App.css';
import Footer from './Components/footer/footer';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import state from './redux/state'
function App() {
    return (
        <div className="App">
            <Header/>
            <Main state={state}/>
            <Footer />
        </div>
    );
}

export default App;
