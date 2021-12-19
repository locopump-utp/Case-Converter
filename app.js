const upperCase = () => {
    const txArea = document.getElementById('txtCase');
    txArea.value = txArea.value.toUpperCase();
};

const lowerCase = () => {
    const txArea = document.getElementById('txtCase');
    txArea.value = txArea.value.toLowerCase();
};

const properCase = () => {
    const txArea = document.getElementById('txtCase');
    let strArr = txArea.value.toLowerCase().split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    }
    txArea.value = strArr.join(' ');
};


const sentenceCase = () => {
    const txArea = document.getElementById('txtCase');
    let strArr = txArea.value.toLowerCase().split('.');
    for (let i = 0; i < strArr.length; i++) {
        if (i === 0) {
            strArr[i] = strArr[i].trimStart().charAt(0).toUpperCase() + strArr[i].trimStart().slice(1);
        } else {
            strArr[i] = ' ' + strArr[i].trimStart().charAt(0).toUpperCase() + strArr[i].trimStart().slice(1);
        }
    }
    txArea.value = strArr.join('.').trimEnd();
};

const saveTextFile = () => {
    const txArea = document.getElementById('txtCase').value;
    download('text.txt', txArea)
};

const download = (filename, text) => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
