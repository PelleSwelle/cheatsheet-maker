import './styles/App.css';
import { useState } from 'react';
import ReactHooks from './testResources/ReactHooks.json'
import Workbench from './components/workbench/Workbench'
import Viewer from './components/viewer/Viewer'
import Cheatsheet from './components/viewer/Cheatsheet'
import { getSelectedRadio } from './utils/GetSelectedRadio'
import handleUpload from './utils/HandleUpload';



function App() {
    const [file, setFile] = useState(ReactHooks)
    const [sheetLayout, setSheetLayout] = useState('columns-with-cards');

    const [groupingStyle, setGroupingStyle] = useState('column')
    const [itemStyle, setItemStyle] = useState('card');
    const [topicDescriptionIsVisible, setTopicDescriptionIsVisible] = useState(false);
    const [groupingDescriptionIsVisible, setGroupingDescriptionIsVisible] = useState(false);
    const [itemDescriptionIsVisible, setItemDescriptionIsVisible] = useState(false);
    const [orientation, setOrientation] = useState('vertical');
    const [itemDescriptionFontSize, setItemDescriptionFontSize] = useState('xs')
    
    // handlers
    const handleStyleChange = () => {
        let newStyle = getSelectedRadio()
        setSheetLayout(newStyle)
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

    const handleItemDescriptionFontSizeChange = () => {
        const select = document.getElementById('item-description-font-size-select')
        itemDescriptionFontSize = setItemDescriptionFontSize(select.value)
    }

    return (
        <div className="App">
            <Workbench
                onUpload={handleUpload}
                onStyleChange={handleStyleChange}
                onOrientationChange={handleOrientationChange}
                onTopicDetailChange={handleTopicDetailChange}
                onGroupingDetailChange={handleGroupingDetailChange}
                onItemDetailChange={handleItemDetailChange}
                onItemDescriptionFontSizeChange={handleItemDescriptionFontSizeChange}
                onFontSizeSelect={handleItemDescriptionFontSizeChange}
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
                    orientation={orientation}
                    itemDescriptionFontSize={itemDescriptionFontSize}
                />
            </Viewer>
        </div>
    );
}

export default App
