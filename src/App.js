import './App.css';
import Workbench from './components/workbench';
import Viewer from './components/Viewer';

export default function App() {
    return (
        <div className="App">
            <Workbench/>
            <Viewer/>                
        </div>
    );
}
