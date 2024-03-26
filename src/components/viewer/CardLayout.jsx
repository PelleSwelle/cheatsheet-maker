import { Card, CardHeader, Heading, Text, CardBody } from "@chakra-ui/react"

export default function CardLayout({ content, groupingHeadingFontSize, groupingDescriptionFontSize, groupingDescriptionIsVisible, itemHeadingFontSize, itemDescriptionFontSize, itemDescriptionIsVisible }) {
        
    const sheetContent = <div>content</div>
    // content.elements.map(group =>
    //     <Card>
    //         <CardHeader>
    //             <Heading as={'h2'} size={groupingHeadingSize}>
    //                 {group.name}
    //             </Heading>
    //             {
    //                 groupingDscrIsVisible
    //                     ? <Text size={groupingDscrSize}>{group.description}</Text>
    //                     : null
    //             }
    //         </CardHeader>

    //         <CardBody>
    //             <HStack>
    //                 {group.elements.map(element =>
    //                     <Card key={Math.random()}>
    //                         <CardHeader>
    //                             <Heading as={'h3'} size={itemHeadingSize}>
    //                                 {element.name}
    //                             </Heading>
    //                         </CardHeader>
    //                         {
    //                             itemDscrIsVisible
    //                                 ? <CardBody>
    //                                     <Text size={itemDscrSize}>{element.description}</Text>
    //                                 </CardBody>
    //                                 : null
    //                         }
    //                     </Card>
    //                 )}
    //             </HStack>
    //         </CardBody>
    //     </Card>
    // )

    return (<Card>{sheetContent}</Card>)
}