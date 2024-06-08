import Grouping from "./Grouping"
import Item from "./Item"
// import { generateId } from '../../utils/IdGenerator';
import { HStack, Stack, Box, Wrap, WrapItem, Center, Text, Heading, Card, CardHeader, CardBody, CardFooter, VStack, Flex, Divider } from "@chakra-ui/react";
import CardLayout from "./CardLayout";
import ColumnLayout from "./ColumnLayout";
import getDepth from "../../utils/getDepth";


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
                <Heading as={'h1'} size={titleFontSize} >{content.name}</Heading>

                {topicDescriptionIsVisible
                    ? (<Text color={'black'} fontSize={topicDescriptionFontSize} >{content.description}</Text>)
                    : null
                }
            </Box>
            <Box m={'20px 0px 0px 0px'}>
                {style == 'cards'
                    ? <CardLayout
                        content={content}

                        showGroupingDescription={groupingDescriptionIsVisible}
                        showItemDescription={itemDescriptionIsVisible}
                        
                        groupingHeadingFontSize={groupingHeadingFontSize}
                        groupingDescriptionFontSize={groupingDescriptionFontSize}

                        itemHeadingFontSize={itemHeadingFontSize}
                        itemDescriptionFontSize={itemDescriptionFontSize}
                    />
                    : <ColumnLayout
                        content={content}
                        depth={getDepth(content)}
                        showGroupingDescription={groupingDescriptionIsVisible}
                        showItemDescription={itemDescriptionIsVisible}
                        
                        groupingHeadingFontSize={groupingHeadingFontSize}
                        groupingDescriptionFontSize={groupingDescriptionFontSize}
                        
                        itemHeadingFontSize={itemHeadingFontSize}
                        itemDescriptionFontSize={itemDescriptionFontSize}
                    />
                }
            </Box>
        </Box>
    )
}