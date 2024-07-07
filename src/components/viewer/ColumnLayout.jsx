import { HStack, VStack, Heading, Text, Card, CardHeader } from "@chakra-ui/react"
const ColumnLayout = ({
    depth,
    content,
    groupingHeadingFontSize,
    groupingDescriptionFontSize,
    showGroupingDescription,
    itemHeadingFontSize,
    itemDescriptionFontSize,
    showItemDescription }) => {

    let sheetContent;

    if (depth == 2) {
        sheetContent = content.children.map(child =>
            <Card key={Math.random()} w={'100%'} boxShadow={'dark-lg'}>
                <CardHeader>
                    <Heading as={'h3'} size={itemHeadingFontSize}>
                        {child.name}
                    </Heading>
                    {showItemDescription
                        ?
                        <Text fontSize={itemDescriptionFontSize}>
                            {child.description}
                        </Text>
                        : null
                    }
                </CardHeader>
            </Card>
        )
    }
    else if (depth == 3) {
        sheetContent = content.children.map(group =>
            <VStack key={Math.random()} className="column" w={'100%'} align={'flex-start'}>
                <Heading as={'h2'} size={groupingHeadingFontSize}>
                    {group.name}
                </Heading> 
                {
                    showGroupingDescription
                        ?
                        <Text fontSize={groupingDescriptionFontSize}>
                            {group.description}
                        </Text>
                        :
                        null
                } {
                    group.children.map(child =>
                        <Card key={Math.random()} w={'100%'} boxShadow={'dark-lg'}>
                            <CardHeader>
                                <Heading as={'h3'} size={itemHeadingFontSize}>
                                    {child.name}
                                </Heading>
                                {showItemDescription
                                    ?
                                    <Text fontSize={itemDescriptionFontSize}>
                                        {child.description}
                                    </Text>
                                    : null
                                }
                            </CardHeader>
                        </Card>
                    )}
            </VStack>
        )
    }

return (
    <HStack className="content" align={'flex-start'}>
        {sheetContent}
    </HStack>
)
}

export default ColumnLayout