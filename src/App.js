import './App.css';
import Viewer from './components/Viewer';
import { useState } from 'react';
import Workbench from './Workbench';

// default data
import ReactHooks from './testResources/ReactHooks';

export default function App() {
    const [file, setFile] = useState(ReactHooks)
    const [sheetStyle, setSheetStyle] = useState('columns');
    const [topicDescriptionIsVisible, setTopicDescriptionIsVisible] = useState(true);
    const [groupDescriptionIsVisible, setGroupDescriptionIsVisible] = useState(true);
    const [itemDescriptionIsVisible, setItemDescriptionIsVisible] = useState(true);
    // const [groupingStyle, setGroupingStyle] = useState('columns')

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


    const handleUpload = () => {
        let file = document.getElementById('file-upload').files[0];
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        
        reader.onload = () => {
            console.log(reader.result);
            let obj = JSON.parse(reader.result)
            setFile(obj)
        }
        reader.onerror = () => {
            console.log(reader.error);
        }
    }

    const handleTopicDetailChange = () => { setTopicDescriptionIsVisible(!topicDescriptionIsVisible) }
    const handleGroupingDetailChange = () => { setGroupDescriptionIsVisible(!groupDescriptionIsVisible) }
    const handleItemDetailChange = () => { setItemDescriptionIsVisible(!itemDescriptionIsVisible) }

    // const handlegroupingStyleChange = () => { setGroupingStyle()}
    return (
        <div className="App">
            <Workbench
                onUpload={handleUpload}
                onStyleChange={handleStyleChange}
                onTopicDetailChange={handleTopicDetailChange}
                onGroupingDetailChange={handleGroupingDetailChange}
                onItemDetailChange={handleItemDetailChange}
            />
            <Viewer
                content={file}
                style={sheetStyle}
                // groupingStyle={groupingStyle}
                topicDescriptionIsVisible={topicDescriptionIsVisible}
                groupDescriptionIsVisible={groupDescriptionIsVisible}
                itemDescriptionIsVisible={itemDescriptionIsVisible}
            />
        </div>
    );
}
