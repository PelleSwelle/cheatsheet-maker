const handleUpload = () => {
    let file = document.getElementById('file-upload').files[0];
    let reader = new FileReader();
    reader.readAsBinaryString(file);

    reader.onload = () => {
        console.log(reader.result);
        let obj = JSON.parse(reader.result)
        setFile(obj)
    }
    reader.onerror = () => {
        console.log(reader.error);
    }
}

export default handleUpload