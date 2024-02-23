import './App.css';
import Viewer from './components/Viewer';
import { useState } from 'react';
import Workbench from './Workbench';

// default data
import ReactHooks from './testResources/ReactHooks';

export default function App() {
    const [file, setFile] = useState(ReactHooks)
    const [sheetLayout, setSheetLayout] = useState('columns-with-cards');
    
    const [groupingStyle, setGroupingStyle] = useState('column')
    const [itemStyle, setItemStyle] = useState('card');
    
    const [topicDescriptionIsVisible, setTopicDescriptionIsVisible] = useState(false);
    const [groupDescriptionIsVisible, setGroupDescriptionIsVisible] = useState(false);
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
    const handleGroupingDetailChange = () => { setGroupDescriptionIsVisible(!groupDescriptionIsVisible) }
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
                content={file}
                layout={sheetLayout}
                groupingStyle={groupingStyle}
                itemStyle={itemStyle}
                topicDescriptionIsVisible={topicDescriptionIsVisible}
                groupDescriptionIsVisible={groupDescriptionIsVisible}
                itemDescriptionIsVisible={itemDescriptionIsVisible}
            />
        </div>
    );
}
