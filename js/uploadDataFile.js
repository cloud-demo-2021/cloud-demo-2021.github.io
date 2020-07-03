function uploadDataFile(event) {
    const selectedFile = event.srcElement.files[0];
    document.getElementById("data-input-file-name").innerHTML = selectedFile.name;
    // TO DO:
    //      Calculate 
    //          # Entries
    //          Entry Size
    //          Key Size
    
    // For now, fake test numbers
    const entries = 123456789;
    const entrySize = 1234;
    const keySize = 12;
    document.getElementById("N").value = numberWithCommas(entries);
    document.getElementById("E").value = entrySize;
    document.getElementById("F").value = keySize;
}