import './App.css'
import { useState } from 'react';
import ReactHooks from './testResources/ReactHooks.json'
import Workbench from './components/workbench/Workbench'
import Viewer from './components/viewer/Viewer'
import Cheatsheet from './components/viewer/Cheatsheet'



function App() {
    const [file, setFile] = useState(ReactHooks)
    const [sheetLayout, setSheetLayout] = useState('columns-with-cards');

    const [groupingStyle, setGroupingStyle] = useState('column')
    const [itemStyle, setItemStyle] = useState('card');

    const [topicDescriptionIsVisible, setTopicDescriptionIsVisible] = useState(true);
    const [groupingDescriptionIsVisible, setGroupingDescriptionIsVisible] = useState(false);
    const [itemDescriptionIsVisible, setItemDescriptionIsVisible] = useState(false);
    const [orientation, setOrientation] = useState('vertical');

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

    // handlers
    const handleStyleChange = () => {
        let newStyle = getSelectedRadio()
        setSheetLayout(newStyle)
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
    const handleGroupingDetailChange = () => { setGroupingDescriptionIsVisible(!groupingDescriptionIsVisible) }
    const handleItemDetailChange = () => { setItemDescriptionIsVisible(!itemDescriptionIsVisible) }

    const handleOrientationChange = () => {
        if (orientation === 'vertical') {
            setOrientation('horizontal')
        } else if (orientation === 'horizontal') {
            setOrientation('vertical')
        }
    }
    // const handlegroupingStyleChange = () => { setGroupingStyle()}
    return (
        <div className="App">
            <Workbench
                onUpload={handleUpload}
                onStyleChange={handleStyleChange}
                onOrientationChange={handleOrientationChange}
                onTopicDetailChange={handleTopicDetailChange}
                onGroupingDetailChange={handleGroupingDetailChange}
                onItemDetailChange={handleItemDetailChange}
            />
            <Viewer
                groupingStyle={groupingStyle}
                itemStyle={itemStyle}
            >
                <Cheatsheet
                    content={file}
                    topicDescriptionIsVisible={topicDescriptionIsVisible}
                    groupingDescriptionIsVisible={groupingDescriptionIsVisible}
                    itemDescriptionIsVisible={itemDescriptionIsVisible}
                    layout={sheetLayout}
                />
            </Viewer>
        </div>
    );
}

export default App
