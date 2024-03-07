
export default function IOCard({onUpload}) {
    const handlePDF = () => {
        alert('not implemented yet. :(')
    }
    return (
        <div className="io-card">
            <button className="button export as-pdf" onClick={handlePDF}>
                Export as PDF
            </button>
            
            <label className="custom-file-upload">
                <input id="file-upload" type="file" className="hidden"
                    multiple={false}
                    accept=".json"
                    onChange={onUpload}
                />
                Upload
            </label>
        </div>
    )
}