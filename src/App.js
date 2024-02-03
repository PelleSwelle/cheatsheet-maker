import './App.css';
import Viewer from './components/Viewer';
import { useState } from 'react';
import StyleSwitcher from './components/StyleSwitcher'
import Exporter from './components/Exporter';

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
        console.log(`Set style to ${newStyle}`)
        setSheetStyle(newStyle)
    }

    return (
        <div className="App">
            <div className="workbench">
                <h1>Cheatsheet Maker</h1>

                <fieldset className="title-and-subtitle">
                    <legend>Title</legend>

                    <label>Title of the document</label>
                    <input className="title"></input>

                    <label>Subtitle</label>
                    <input className="subtitle"></input>
                </fieldset>

                <StyleSwitcher onChange={handleStyleChange}/>

                <fieldset className="content" id="content">
                    <legend>Content</legend>
                    <input type="text" id=""></input>
                </fieldset>

                <Exporter />
            </div>
            <Viewer style={sheetStyle} />
        </div>
    );
}
