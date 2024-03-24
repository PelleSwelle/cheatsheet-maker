import Grouping from "./Grouping"
import Item from "./Item"
import { generateId } from '../../utils/IdGenerator';
import { HStack, Stack, Box, Wrap, WrapItem, Center, Text, Heading, Card, CardHeader, CardBody, CardFooter, VStack, Flex, Divider } from "@chakra-ui/react";
import CardLayout from "./CardLayout";
import ColumnLayout from "./ColumnLayout";

export default function Cheatsheet({
    content,
    showTopicDescription,
    showGroupingDescription,
    showItemDescription,

    groupingHeadingSize,
    groupingDescriptionSize,

    itemHeadingSize,
    itemDescriptionSize,

    orientation,
    style,
}) {

    const className = 'cheatsheet ' + orientation;

    return (
        <Box id="cheatsheet" 
            className={className} 
            bgGradient={'linear(to-br, green.200, pink.500)'} 
            p={'20px'} >
            <Box className="sheet-header">
                <Heading as={'h1'}>{content.name}</Heading>

                {showTopicDescription
                    ? (<Text color={'black'}>{content.description}</Text>)
                    : null
                }
            </Box>
            <Box m={'20px 0px 0px 0px'}>
                {style == 'cards'
                    ? <CardLayout
                        content={content}

                        groupingHeadingSize={groupingHeadingSize}
                        groupingDescriptionSize={groupingDescriptionSize}
                        showGroupingDescription={showGroupingDescription}
                        
                        itemHeadingSize={itemHeadingSize}
                        itemDescriptionSize={itemDescriptionSize}
                        showItemDescription={showItemDescription}
                    />
                    : <ColumnLayout
                        content={content}

                        groupingHeadingSize={groupingHeadingSize}
                        groupingDescriptionSize={groupingDescriptionSize}
                        showGroupingDescription={showGroupingDescription}
                        
                        itemHeadingSize={itemHeadingSize}
                        itemDescriptionSize={itemDescriptionSize}
                        showItemDescription={showItemDescription}
                    />
                }
            </Box>
        </Box>
    )
}