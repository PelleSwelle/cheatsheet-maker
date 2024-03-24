import DomToImage from "dom-to-image"

import { Card, CardHeader, CardBody, Button, Text } from "@chakra-ui/react"

export default function IOCard({onUpload}) {
    
    const handlePDF = () => {
        let node = document.getElementById('cheatsheet')
        DomToImage.toBlob(node)
            .then(function(blob) {
                window.saveAs(blob, 'my-cheatsheet')
            })
    }

    return (
        <Card className="io-card">
            <Button className="button export as-pdf" onClick={handlePDF}>
                <Text>Export as PDF</Text>
            </Button>
            
            <label>
                Upload

                <input 
                    type="file" 
                    id="file-upload" 
                    // multiple={false}
                    accept=".json, .docx"
                    onChange={onUpload}
                />
            </label>
        </Card>
    )
}