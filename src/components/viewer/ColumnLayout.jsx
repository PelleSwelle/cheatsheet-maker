import { HStack, VStack, Heading, Text, Card, CardHeader } from "@chakra-ui/react"
const ColumnLayout = ({
    content,
    groupingHeadingSize,
    groupingDescriptionSize,
    showGroupingDescription,
    itemHeadingSize,
    itemDescriptionSize,
    showItemDescription }) => {

    const sheetContent =
        content.elements.map(group =>
            <VStack key={Math.random()} className="column" w={'100%'} align={'flex-start'}>
                <Heading as={'h2'} size={groupingHeadingSize}>
                    {group.name}
                </Heading>
                {
                    showGroupingDescription
                        ? <Text size={groupingDescriptionSize}>
                            {group.description}
                        </Text>
                        : null
                }
                {group.elements.map(element =>
                    <Card key={Math.random()} w={'100%'} boxShadow={'dark-lg'}>
                        <CardHeader>
                            <Heading as={'h3'} size={itemHeadingSize}>
                                {element.name}
                            </Heading>
                            {showItemDescription
                                ? 
                                <Text size={itemDescriptionSize}>
                                    {element.description}
                                </Text>
                                : null
                            }
                        </CardHeader>
                    </Card>
                )}
            </VStack>
        )
    return (
        <HStack className="content" align={'flex-start'}>
            {sheetContent}
        </HStack>
    )
}

export default ColumnLayout