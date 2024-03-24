import {
    Wrap, VStack,
    Card, CardHeader, CardBody,
    Text, Heading
} from "@chakra-ui/react"

const OneLevelSheet = ({ content, itemDescriptionIsVisible }) => {
    let sheetContent = content.elements.map(item =>
        <Card key={Math.random()} maxH={'md'}>
            {itemDescriptionIsVisible
                ?
                <>
                    <CardHeader p={'2px 0px 2px 10px'}>
                        <Heading as={'h3'} size={'xs'}>
                            {item.name}
                        </Heading>
                    </CardHeader>
                    <CardBody p={'10px'}>
                        <Text>{item.description}</Text>
                    </CardBody>
                </>
                :
                <CardHeader>
                    <Heading as={'h3'} size={'xs'}>
                        {item.name}
                    </Heading>
                </CardHeader>
            }

        </Card>
    )
    return (
        <VStack>
            {sheetContent}
        </VStack>
    )
}
export default OneLevelSheet