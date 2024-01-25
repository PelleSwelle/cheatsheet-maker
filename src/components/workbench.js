import StyleSwitcher from "./StyleSwitcher";
import Exporter from "./Exporter";
import { useState } from "react";

function Workbench() {    
    const [currentStyle, setStyle] = useState(0) // default is list
    
    const handleStyleChange = (e) => {
        console.log(currentStyle)
        setStyle(e.target.value)
        console.log(currentStyle)
    }

    return(
        <div className="workbench">
            I am the workbench

            <fieldset className="title-and-subtitle">
                <legend>Title</legend>
                <label>Title of the document</label>
                <input className="title"></input>
                <label>Subtitle</label>
                <input className="subtitle"></input>
            </fieldset>

            <StyleSwitcher
                style={currentStyle}
                onChange={handleStyleChange}
            />

            <fieldset className="content" id="content">
                <legend>Content</legend>
                <input type="text" id=""></input>
            </fieldset>

            <Exporter/>            
        </div>
    )
}

export default Workbench;