import './styles/App.css';
import { useState } from 'react';
import DetailSettingsCard from './components/workbench/DetailSettingsCard'
import StyleSettingsCard from './components/workbench/StyleSettingsCard';


// test files
import cognitiveDistortions from './testResources/cognitiveDistortions.json'
import ReactHooks from './testResources/ReactHooks.json'
import JapaneseTechniques from './testResources/JapaneseTechniques.json'
import designPatterns from './testResources/DesignPatterns.json'

// components
import Workbench from './components/workbench/Workbench'
import IOCard from './components/workbench/IOCard'
import { FontController } from './components/workbench/FontController';
import Viewer from './components/viewer/Viewer'
import Cheatsheet from './components/viewer/Cheatsheet'
import { getSelectedRadio } from './utils/GetSelectedRadio'
// import handleUpload from './utils/HandleUpload';
import { Box, Divider, Heading } from '@chakra-ui/react';
import {convertToChakraFontSize} from './utils/ConvertToChakraFontSize'
import '@melloware/coloris/dist/coloris.css'
import Coloris from '@melloware/coloris';
import getDepth from './utils/getDepth';

Coloris.init()
Coloris({el: '.coloris'})

function App() {
    const [file, setFile] = useState(designPatterns)
    
    const [descriptionIsVisible, setDescriptionIsVisible] = useState({
        topic: false,
        grouping: false,
        item: false
    })

    // VISUALISATION
    const [orientation, setOrientation] = useState('vertical');
    const [style, setStyle] = useState('cards')

    // ******** FONT SIZES ********
    const [fontSizes, setFontSize] = useState({
        TopicHeading: 4,
        topicDescription: 1,

        groupingHeading: 3,
        groupingDescription: 1,
        
        itemHeading: 2,
        itemDescription: 1
    })
    
    const [background, setBackground] = useState(`linear(to-br, green.200, pink.500)`)


    // handlers
    const handleUpload = async () => {
        await fetch(document.getElementById('file-upload').files[0])
        .then(res => setFile(res))

        console.log(`uploaded ${file.name}`)
    }

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

    const handleColorChange = () => {
        const color1 = document.getElementById('color1').value
        const color2 = document.getElementById('color2').value

        setBackground(`linear(to-br, ${color1}, ${color2})`)
    }

    const handleDetailChange = (level) => {
        // Gross, but I couldn't figure out how to pass anything to get the function to take the argument
        if (level == 'topic') {
            setDescriptionIsVisible({...descriptionIsVisible, topic: !descriptionIsVisible.topic})
        }
        if (level == 'grouping') {
            setDescriptionIsVisible({...descriptionIsVisible, grouping: !descriptionIsVisible.grouping})
        }
        if (level == 'item') {
            setDescriptionIsVisible({...descriptionIsVisible, item: !descriptionIsVisible.item})
        }
    }

    return (
        <div className="App">
            <Workbench>
                <DetailSettingsCard
                    hasGroupings={getDepth(file) > 2}
                    onTopicDetailChange={() => handleDetailChange('topic')}
                    onGroupingDetailChange={() => handleDetailChange('grouping')}
                    onItemDetailChange={() => handleDetailChange('item')}
                />

                <Divider mt={'5px'} mb={'5px'}/>
                
                <StyleSettingsCard
                    styleSelected={style}
                    onStyleChange={handleStyleChange}

                    orientationSelected={orientation}
                    onOrientationChange={handleOrientationChange}
                />
                
                <Divider mt={'5px'} mb={'5px'}/>
                
                <Box id='color-selectors'>
                    <Heading as={'h2'} size={'md'}>Colors</Heading>
                    <input type="text" id='color1' className='coloris color-selector' onInput={() => handleColorChange()}/>
                    <input type="text" id='color2' className='coloris color-selector' onInput={() => handleColorChange()}/>
                </Box>
                
                <Box>
                    <Heading as={'h2'} size={'md'}>Font sizes</Heading>
                    
                    <FontController 
                        name={'Title'} 
                        value={fontSizes.TopicHeading} 
                        onChange={(value) => setFontSize({...fontSizes, TopicHeading: convertToChakraFontSize(value)})}/>
                    
                    <FontController 
                        name={'Description'}
                        value={fontSizes.topicDescription}
                        IsTogglable={true}
                        onChange={(value) => setFontSize({...fontSizes, topicDescription: convertToChakraFontSize(value)})}
                        />
                    {
                        getDepth(file) > 2
                        ?
                        <>
                        <FontController 
                            name={'Grouping Headings'} 
                            value={fontSizes.groupingHeading} 
                            onChange={(value) => setFontSize({...fontSizes, groupingHeading: value})}/>
                        <FontController 
                            name={'Grouping Descriptions'} 
                            value={fontSizes.groupingDescription} 
                            IsTogglable={true}
                            onChange={(value) => setFontSize({...fontSizes, groupingDescription: value})}/>
                        </>
                        : 
                        null
                    }
                    <FontController 
                        name={'Item Headings'} 
                        value={fontSizes.itemHeading} 
                        onChange={(value) => setFontSize({...fontSizes, itemHeading: value})}/>
                    
                    <FontController 
                        name={'Item Descriptions'} 
                        value={fontSizes.itemDescription} 
                        IsTogglable={true}
                        onChange={(value) => setFontSize({...fontSizes, itemDescription: value})}/>
                </Box>

                
                <IOCard onUpload={handleUpload} />
                
                <Box></Box>
            </Workbench>

            <Viewer>
                <Cheatsheet
                    content={file}

                    // descriptionsVisible={descriptionIsVisible}
                    topicDescriptionIsVisible={descriptionIsVisible.topic}
                    groupingDescriptionIsVisible={descriptionIsVisible.grouping}
                    itemDescriptionIsVisible={descriptionIsVisible.item}
                    
                    titleFontSize={convertToChakraFontSize(fontSizes.TopicHeading)}
                    topicDescriptionFontSize={convertToChakraFontSize(fontSizes.topicDescription)}
                    groupingHeadingFontSize={convertToChakraFontSize(fontSizes.groupingHeading)}
                    groupingDescriptionFontSize={convertToChakraFontSize(fontSizes.groupingDescription)}
                    
                    itemHeadingFontSize={convertToChakraFontSize(fontSizes.itemHeading)}
                    itemDescriptionFontSize={convertToChakraFontSize(fontSizes.itemDescription)}
                    
                    orientation={orientation}
                    style={style}
                    background={background}
                />
            </Viewer>
        </div>
    );
}

export default App
