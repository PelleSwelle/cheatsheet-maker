import './App.css';
import Viewer from './components/Viewer';
import { useState } from 'react';
import Workbench from './Workbench';

export default function App() {
    const [sheetStyle, setSheetStyle] = useState('cards');
    const [topicDescriptionIsVisible, setTopicDescriptionIsVisible] = useState(true);
    const [groupDescriptionIsVisible, setGroupDescriptionIsVisible] = useState(true);
    const [itemDescriptionIsVisible, setItemDescriptionIsVisible] = useState(true);
    const [groupingStyle, setGroupingStyle] = useState('columns')

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

    const handleTopicDetailChange = () => { setTopicDescriptionIsVisible(!topicDescriptionIsVisible) }
    const handleGroupingDetailChange = () => { setGroupDescriptionIsVisible(!groupDescriptionIsVisible) }
    const handleItemDetailChange = () => { setItemDescriptionIsVisible(!itemDescriptionIsVisible) }

    // const handlegroupingStyleChange = () => { setGroupingStyle()}
    return (
        <div className="App">
            <Workbench 
                onStyleChange={handleStyleChange}
                onTopicDetailChange={handleTopicDetailChange}
                onGroupingDetailChange={handleGroupingDetailChange}
                onItemDetailChange={handleItemDetailChange}
            />
            <Viewer 
                style={sheetStyle} 
                groupingStyle={groupingStyle}
                topicDescriptionIsVisible={topicDescriptionIsVisible} 
                groupDescriptionIsVisible={groupDescriptionIsVisible} 
                itemDescriptionIsVisible={itemDescriptionIsVisible}
            />
        </div>
    );
}
