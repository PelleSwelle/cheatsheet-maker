import './App.css';
import Viewer from './components/Viewer';
import { useState } from 'react';
import StyleSwitcher from './components/StyleSwitcher'
import Exporter from './components/Exporter';
import TextInput from './TextInput';
import Workbench from './Workbench';

export default function App() {
    const [sheetStyle, setSheetStyle] = useState('list');

    const getSelectedRadio = () => {
        let radios = document.getElementsByName('style-radio')
        let selected;
        
        for (let radio of radios) {
            if (radio.checked) {
                selected = radio.value
            }
        }
        return selected
    }

    const handleStyleChange = () => {
        let newStyle = getSelectedRadio()
        setSheetStyle(newStyle)
    }

    return (
        <div className="App">
            <Workbench onStyleChange={handleStyleChange}/>
            <Viewer style={sheetStyle} />
        </div>
    );
}
