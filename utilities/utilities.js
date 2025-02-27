// to get input value from a feild
function getInputValueById(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// to get inner text of an element
function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// to set innerText of an Element
function setInnerTextByIdAndValue(id, value) {
    document.getElementById(id).innerText = value;
}

//to change & toggle button for change transiction method
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}