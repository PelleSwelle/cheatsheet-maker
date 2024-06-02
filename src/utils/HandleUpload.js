// import mammoth from 'mammoth';
var mammoth = require('mammoth')

const handleUpload = () => {
    let file = document.getElementById('file-upload').files[0];
    console.log(`uploaded ${file.name}`)
    
    // alert('This is not implemented yet. :/')

    mammoth.convertToHtml(file)
    .then(function(result) {
        var html = result.value;
        var messages = result.messages;

        console.log(html)
    })
    .then(function(error) {
        console.log(error)
    })

    // mammoth.extractRawText({file, arrayBuffer: data})
    // .then(function(result) {
    //     var text = result.value;
    //     var messages = result.messages;
    //     console.log(text)
    // })
    // .catch (function(error) {
    //     console.log(error)
    // })

    // let reader = new FileReader();
    // reader.readAsBinaryString(file);

    // reader.onload = () => {
    //     console.log(reader.result);
    //     let obj = JSON.parse(reader.result)
    //     setFile(obj)
    // }
    // reader.onerror = () => {
    //     console.log(reader.error);
    // }
}

export default handleUpload