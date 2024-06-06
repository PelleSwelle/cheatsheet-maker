import './styles/App.css';
import { useState } from 'react';
import DetailSettingsCard from './components/workbench/DetailSettingsCard'
import StyleSettingsCard from './components/workbench/StyleSettingsCard';


// test files
import cognitiveDistortions from './testResources/cognitiveDistortions.json'
import ReactHooks from './testResources/ReactHooks.json'
import JapaneseTechniques from './testResources/JapaneseTechniques.json'
import designPatterns from './testResources/DesignPatterns.json'
import Workbench from './components/workbench/Workbench'
import IOCard from './components/workbench/IOCard'
import { FontController } from './components/workbench/FontController';
import Viewer from './components/viewer/Viewer'
import Cheatsheet from './components/viewer/Cheatsheet'
import { getSelectedRadio } from './utils/GetSelectedRadio'
// import handleUpload from './utils/HandleUpload';
import mammoth from 'mammoth';
import { Box, Divider, Heading } from '@chakra-ui/react';
import {convertToChakraFontSize} from './utils/ConvertToChakraFontSize'
import '@melloware/coloris/dist/coloris.css'
import Coloris from '@melloware/coloris';

Coloris.init()
Coloris({el: '.coloris'})

function App() {
    const [file, setFile] = useState(cognitiveDistortions)

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
    
    
    const [background, setBackground] = useState(`linear(to-br, green.200, pink.500)`)


    // handlers
    const handleUpload = async () => {
        await fetch(document.getElementById('file-upload').files[0])
        .then(response => response.text())
        .then(text => console.log(text))
        
        let fileExtracted = file.text();
        console.log(fileExtracted)
        // .then(response => response.text())
        // .then(text => document.getElementById('cheatsheet').innerHTML = text)

        console.log(`uploaded ${file.name}`)
        
        // alert('This is not implemented yet. :/')
    
        // mammoth.extractRawText(file)
        // .then(function(result){
        //     console.log(result)
        //     // var text = result.value; // The raw text
        //     // console.log(text)
        //     // var messages = result.messages;
        //     // setFile(text)
        // })
        // .catch(function(error) {
        //     console.error(error);
        // });
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

        console.log(`Colors: ${color1}, ${color2}`)
        setBackground(`linear(to-br, ${color1}, ${color2})`)
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
                <Box id='color-selectors'>
                    <Heading as={'h2'} size={'md'}>Colors</Heading>
                    <input type="text" id='color1' className='coloris color-selector' onInput={() => handleColorChange()}/>
                    <input type="text" id='color2' className='coloris color-selector' onInput={() => handleColorChange()}/>
                </Box>
                <Box>
                    <Heading as={'h2'} size={'md'}>Font sizes</Heading>
                    <FontController 
                        name={'Title'} 
                        value={titleFontSize} 
                        onChange={(value) => setTitleFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Description'}
                        value={topicDescriptionFontSize}
                        IsTogglable={true}
                        onChange={(value) => setTopicDescriptionFontSize(convertToChakraFontSize(value))}
                        />
                    <FontController 
                        name={'Grouping Headings'} 
                        value={groupingHeadingFontSize} 
                        onChange={(value) => setGroupingHeadingFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Grouping Descriptions'} 
                        value={groupingDescriptionFontSize} 
                        IsTogglable={true}
                        onChange={(value) => setGroupingDescriptionFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Item Headings'} 
                        value={itemHeadingFontSize} 
                        onChange={(value) => setItemHeadingFontSize(convertToChakraFontSize(value))}/>
                    <FontController 
                        name={'Item Descriptions'} 
                        value={itemDescriptionFontSize} 
                        IsTogglable={true}
                        onChange={(value) => setItemDescriptionFontSize(convertToChakraFontSize(value))}/>
                </Box>

                
                <IOCard onUpload={handleUpload} />
                <Box></Box>
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
                    background={background}
                />
            </Viewer>
        </div>
    );
}

export default App
