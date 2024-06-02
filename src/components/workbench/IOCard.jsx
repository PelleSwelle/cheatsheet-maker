import DomToImage from "dom-to-image"

import { Flex, Box, Button, Text } from "@chakra-ui/react"

export default function IOCard({onUpload}) {
    
    const handlePDF = () => {
        let node = document.getElementById('cheatsheet')
        DomToImage.toBlob(node)
            .then(function(blob) {
                window.saveAs(blob, 'my-cheatsheet')
            })
    }

    return (
        <Box className="io-card">
            <Button className="button export as-pdf" onClick={handlePDF}>
                <Text>Export as PDF</Text>
            </Button>
            
            <Flex id="file-input-container">
                <label for='file-upload' id="upload-button-label">Upload</label>

                    <input type="file" 
                        id="file-upload" 
                        // multiple={false}
                        accept=".json, .docx, .html"
                        onChange={onUpload}
                    />
            </Flex>
        </Box>
    )
}