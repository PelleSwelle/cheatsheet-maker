import { Text } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"

export default function Item({ item, descriptionIsVisible, descriptionFontSize }) {

    const className = 'item-description ' + (descriptionIsVisible ? 'visible' : 'hidden')

    return (
        <Box className='item' key={item.id}>
            <div className="image-placeholder"></div>
            <div className="item-content">
                <h3 
                    contentEditable suppressContentEditableWarning>{item.name}</h3>
                <Text 
                    fontSize={descriptionFontSize} 
                    contentEditable 
                    suppressContentEditableWarning>
                    {item.description}
                </Text>
            </div>

            {/* implement the rest of the things */}
        </Box>
    )
}