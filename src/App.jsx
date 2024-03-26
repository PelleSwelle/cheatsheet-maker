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
    const [titleFontSize, setTitleFontSize] = useState(5);
    const [topicDescriptionFontSize, setTopicDescriptionFontSize] = useState(2)
    // GROUPINGS
    const [groupingHeadingFontSize, setGroupingHeadingFontSize] = useState(3);
    const [groupingDescriptionFontSize, setGroupingDescriptionFontSize] = useState(1);
    
    // ITEMS
    const [itemHeadingFontSize, setItemHeadingFontSize] = useState(2)
    const [itemDescriptionFontSize, setItemDescriptionFontSize] = useState(0)
    

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

    const convertToChakraFontSize = (value) => {
        let fontSize = ''
        if (value == 0) {fontSize = 'xs'}
        if (value == 1) {fontSize = 'sm'}
        if (value == 2) {fontSize = 'md'}
        if (value == 3) {fontSize = 'lg'}
        if (value == 4) {fontSize = 'xl'}
        return fontSize
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
                        value={titleFontSize} 
                        onChange={(value) => setTitleFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Description'}
                        value={topicDescriptionFontSize}
                        onChange={(value) => setTopicDescriptionFontSize(convertToChakraFontSize(value))}
                    />
                    <FontController 
                        name={'Grouping Headings'} 
                        value={groupingHeadingFontSize} 
                        onChange={(value) => setGroupingHeadingFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Grouping Descriptions'} 
                        value={groupingDescriptionFontSize} 
                        onChange={(value) => setGroupingDescriptionFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Item Headings'} 
                        value={itemHeadingFontSize} 
                        onChange={(value) => setItemHeadingFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Item Descriptions'} 
                        value={itemDescriptionFontSize} 
                        onChange={(value) => setItemDescriptionFontSize(convertToChakraFontSize(value))}/>
                </Box>
                {/* <IOCard onUpload={handleUpload} /> */}
            </Workbench>

            <Viewer>
                <Cheatsheet
                    content={file}

                    showTopicDescription={showTopicDescription}
                    showGroupingDescription={showGroupingDescription}
                    showItemDescription={showItemDescription}
                    
                    titleFontSize={titleFontSize}
                    topicDescriptionFontSize={topicDescriptionFontSize}
                    groupingHeadingFontSize={groupingHeadingFontSize}
                    groupingDescriptionFontSize={groupingDescriptionFontSize}
                    
                    itemHeadingFontSize={itemHeadingFontSize}
                    itemDescriptionFontSize={itemDescriptionFontSize}
                    
                    orientation={orientation}
                    style={style}
                />
            </Viewer>
        </div>
    );
}

export default App
