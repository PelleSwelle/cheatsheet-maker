import './styles/App.css';
import { useState } from 'react';
import DetailSettingsCard from './components/workbench/DetailSettingsCard'
import StyleSettingsCard from './components/workbench/StyleSettingsCard';


// test files
import ReactHooks from './testResources/ReactHooks.json'
import JapaneseTechniques from './testResources/JapaneseTechniques.json'
import designPatterns from './testResources/DesignPatterns.json'
import Workbench from './components/workbench/Workbench'
import IOCard from './components/workbench/IOCard'
import { FontController } from './components/workbench/FontController';
import Viewer from './components/viewer/Viewer'
import Cheatsheet from './components/viewer/Cheatsheet'
import { getSelectedRadio } from './utils/GetSelectedRadio'
import handleUpload from './utils/HandleUpload';
import { Box, Divider, Heading } from '@chakra-ui/react';



function App() {
    const [file, setFile] = useState(designPatterns)

    const [showTopicDescription, setShowTopicDescription] = useState(false);
    const [showGroupingDescription, setShowGroupingDescription] = useState(false);
    const [showItemDescription, setShowItemDescription] = useState(false);

    // VISUALISATION
    const [orientation, setOrientation] = useState('vertical');
    const [style, setStyle] = useState('columns')

    // ******** FONT SIZES ********
    const [titleSize, setTitleSize] = useState(5);
    // GROUPINGS
    const [groupingHeadingSize, setGroupingHeadingSize] = useState(4);
    const [groupingDescriptionSize, setGroupingDescriptionSize] = useState(2);
    
    // ITEMS
    const [itemHeadingSize, setItemHeadingSize] = useState(3)
    const [itemDescriptionSize, setItemDescriptionFontSize] = useState(1)
    

    // handlers
    const handleStyleChange = () => {
        let newStyle = getSelectedRadio('style-radio')
        setStyle(newStyle)
    }

    const handleOrientationChange = () => {
        if (orientation === 'vertical') {
            setOrientation('horizontal')
        } else if (orientation === 'horizontal') {
            setOrientation('vertical')
        }
    }

    return (
        <div className="App">
            <Workbench>
                <DetailSettingsCard
                    onTopicDetailChange={() => setShowTopicDescription(!showTopicDescription)}
                    onGroupingDetailChange={() => setShowGroupingDescription(!showGroupingDescription)}
                    onItemDetailChange={() => setShowItemDescription(!showItemDescription)}
                />
                <Divider mt={'5px'} mb={'5px'}/>
                <StyleSettingsCard
                    styleSelected={style}
                    onStyleChange={handleStyleChange}
                    onOrientationChange={handleOrientationChange}
                />
                <Divider mt={'5px'} mb={'5px'}/>

                <Box>
                    <Heading as={'h2'} size={'md'}>Font sizes</Heading>
                    <FontController 
                        name={'Title'} 
                        value={titleSize} 
                        onChange={(e) => setTitleSize(e.target.value)}/>
                    <FontController 
                        name={'Grouping Headers'} 
                        value={groupingHeadingSize} 
                        onChange={(e) => setGroupingHeadingSize(e.target.value)}/>
                    <FontController 
                        name={'Grouping Descriptions'} 
                        value={groupingDescriptionSize} 
                        onChange={(e) => setGroupingDescriptionSize(e.target.value)}/>
                    <FontController 
                        name={'Item Headings'} 
                        value={itemHeadingSize} 
                        onChange={(e) => setItemHeadingSize(e.target.value)}/>
                    <FontController 
                        name={'Item Descriptions'} 
                        value={itemDescriptionSize} 
                        onChange={(e) => setItemDescriptionFontSize(e.target.value)}/>
                </Box>
                {/* <IOCard onUpload={handleUpload} /> */}
            </Workbench>

            <Viewer>
                <Cheatsheet
                    content={file}

                    showTopicDescription={showTopicDescription}
                    showGroupingDescription={showGroupingDescription}
                    showItemDescription={showItemDescription}

                    groupingHeadingSize={groupingHeadingSize}
                    itemHeadingSize={itemHeadingSize}

                    groupingDescriptionSize={groupingDescriptionSize}
                    itemDescriptionSize={itemDescriptionSize}
                    
                    orientation={orientation}
                    style={style}
                />
            </Viewer>
        </div>
    );
}

export default App
