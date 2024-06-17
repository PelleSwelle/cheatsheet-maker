import DomToImage from "dom-to-image"
import html2canvas from "html2canvas"


import { Flex, Box, Button, Text } from "@chakra-ui/react"

export default function IOCard({onUpload}) {
    
    let screenshot;
    
    const handleDownloadImage = () => {
        let node = document.getElementById('cheatsheet')
        html2canvas(node)
        .then(canvas => {
            var link = document.createElement("a");
            document.body.appendChild(link);
            link.download = "html_image.jpg";
            link.href = canvas.toDataURL();
            link.target = '_blank';
            link.click();

        })
    }

    return (
        <Box className="io-card">
            <Button className="button export as-pdf" onClick={handleDownloadImage}>
                <Text>Download as Image</Text>
            </Button>
            
            <Flex id="file-input-container">
                <label htmlFor='file-upload' id="upload-button-label">Upload</label>

                    <input type="file" 
                        id="file-upload" 
                        // multiple={false}
                        accept=".json, .docx, .html"
                        onChange={handleDownloadImage}
                    />
            </Flex>
        </Box>
    )
}