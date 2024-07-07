import Grouping from "./Grouping"
import Item from "./Item"
// import { generateId } from '../../utils/IdGenerator';
import {  Box, Text, Heading,  Flex, HStack } from "@chakra-ui/react";
import CardLayout from "./CardLayout";
import ColumnLayout from "./ColumnLayout";
import getDepth from "../../utils/getDepth";
import { convertToChakraFontSize } from "../../utils/ConvertToChakraFontSize";


export default function Cheatsheet({
    content,
    topicDescriptionIsVisible,
    groupingDescriptionIsVisible,
    itemDescriptionIsVisible,

    titleFontSize,
    topicDescriptionFontSize,
    groupingHeadingFontSize,
    groupingDescriptionFontSize,

    itemHeadingFontSize,
    itemDescriptionFontSize,

    orientation,
    style,
    background
}) {
    
    const className = 'cheatsheet ' + orientation;
    
    return (
        <Box id="cheatsheet" 
            className={className}
            bgGradient={background} 
            p={'20px'} >
            <Box className="sheet-header">
                <Heading as={'h1'} size={convertToChakraFontSize(titleFontSize)} >{content.name}</Heading>

                {topicDescriptionIsVisible
                    ? (<Text color={'black'} fontSize={convertToChakraFontSize(topicDescriptionFontSize)} >{content.description}</Text>)
                    : null
                }
            </Box>
            <HStack m={'20px 0px 0px 0px'} align={"space-between"}>
                {style == 'cards'
                    ? <CardLayout
                        content={content}

                        showGroupingDescription={groupingDescriptionIsVisible}
                        showItemDescription={itemDescriptionIsVisible}
                        
                        groupingHeadingFontSize={convertToChakraFontSize(groupingHeadingFontSize)}
                        groupingDescriptionFontSize={convertToChakraFontSize(groupingDescriptionFontSize)}

                        itemHeadingFontSize={convertToChakraFontSize(itemHeadingFontSize)}
                        itemDescriptionFontSize={convertToChakraFontSize(itemHeadingFontSize)}
                    />
                    : <ColumnLayout
                        content={content}
                        depth={getDepth(content)}
                        showGroupingDescription={groupingDescriptionIsVisible}
                        showItemDescription={itemDescriptionIsVisible}
                        
                        groupingHeadingFontSize={convertToChakraFontSize(groupingHeadingFontSize)}
                        groupingDescriptionFontSize={convertToChakraFontSize(groupingDescriptionFontSize)}
                        
                        itemHeadingFontSize={convertToChakraFontSize(itemHeadingFontSize)}
                        itemDescriptionFontSize={convertToChakraFontSize(itemDescriptionFontSize)}
                    />
                }
            </HStack>
        </Box>
    )
}