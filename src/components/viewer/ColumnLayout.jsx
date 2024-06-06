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

    console.log(`depth of content is ${depth}`)

    if (depth == 2) {
        sheetContent = content.children.map(child =>
            <Card key={Math.random()} w={'100%'} boxShadow={'dark-lg'}>
                <CardHeader>
                    <Heading as={'h3'} size={itemHeadingFontSize} contentEditable>
                        {child.name}
                    </Heading>
                    {showItemDescription
                        ?
                        <Text fontSize={itemDescriptionFontSize} contentEditable>
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
                <Heading as={'h2'} size={groupingHeadingFontSize} contentEditable>
                    {group.name}
                </Heading> 
                {
                    showGroupingDescription
                        ?
                        <Text fontSize={groupingDescriptionFontSize} contentEditable>
                            {group.description}
                        </Text>
                        :
                        null
                } {
                    group.children.map(child =>
                        <Card key={Math.random()} w={'100%'} boxShadow={'dark-lg'}>
                            <CardHeader>
                                <Heading as={'h3'} size={itemHeadingFontSize} contentEditable>
                                    {child.name}
                                </Heading>
                                {showItemDescription
                                    ?
                                    <Text fontSize={itemDescriptionFontSize} contentEditable>
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
    <VStack className="content" align={'flex-start'}>
        {sheetContent}
    </VStack>
)
}

export default ColumnLayout