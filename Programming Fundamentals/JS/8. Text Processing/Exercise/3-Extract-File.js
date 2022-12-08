function extractFile(path) {

    const dirs = path.split('\\');
    const file = dirs.pop();
    const lastComa = file.lastIndexOf('.');
    const fileName = file.substring(0, lastComa);
    const extension = file.substring(lastComa + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}

// Don't copy the calling of the function in judge, just the code above

extractFile('C:\\Internal\\training-internal\\Template.pptx');

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');