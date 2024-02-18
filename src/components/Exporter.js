import jsPDF from "jspdf"

export default function Exporter() {

    var elementHandler = {
        '#ignorePDF': function (element, renderer) {
            return true;
        }
    };
    const handlePDF = () => {
        const doc = new jsPDF();
        var source = window.document.getElementsByTagName('body')[0];
        doc.fromHTML(
            source,
            15,
            15,
            {
                'width': 180, 'elementHandlers': elementHandler
            }
        )
        doc.save('a4.pdf');
    }
    const handlePNG = () => alert('Exporting as PNG not implemented yet.')


    return (
        <fieldset className="export-options">
            <legend>Export</legend>
            <button className="export as-pdf" onClick={handlePDF}>Export as PDF</button>
            <button className="export as-png" onClick={handlePNG}> Export as PNG</button>
        </fieldset>
    )
}