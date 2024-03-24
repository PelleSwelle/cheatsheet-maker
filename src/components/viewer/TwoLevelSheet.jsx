import { 
    Wrap, HStack,
    Card, CardHeader, CardBody,
    Heading, Text
} from "@chakra-ui/react"

const TwoLevelSheet = ({content}) => {
    let sheetContent = content.elements.map(group =>
        <Card>
            <CardHeader>
                <Heading as={'h2'} size={'md'}>
                    {group.name}
                </Heading>
            </CardHeader>
            <CardBody>
                <HStack>
                    {group.elements.map(element =>
                        <Card key={Math.random()}>
                            <CardHeader>
                                <Heading as={'h3'} size={'xs'}>
                                    {element.name}
                                </Heading>
                            </CardHeader>
                            {
                                itemDescriptionIsVisible
                                ? <CardBody>
                                    <Text size={itemDescriptionFontSize}>{element.description}</Text>
                                </CardBody>
                                : null
                            }
                        </Card>
                    )}
                </HStack>
            </CardBody>
        </Card>
    )

    return (
        <Wrap>
            {sheetContent}
        </Wrap>
    )
}
export default TwoLevelSheet