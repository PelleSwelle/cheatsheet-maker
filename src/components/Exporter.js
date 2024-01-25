export default function Exporter() {

    const handlePDF = () => alert('exporting as PDF not implemented yet.')

    const handlePNG = () => alert('Exporting as PNG not implemented yet.')

    return (
        <fieldset className="export-options">
            <legend>Export</legend>
            <button className="export as-pdf" onClick={handlePDF}>Export as PDF</button>
            <button className="export as-png" onClick={handlePNG}> Export as PNG</button>
        </fieldset>
    )
}