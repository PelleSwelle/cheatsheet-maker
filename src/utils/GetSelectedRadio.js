export const getSelectedRadio = (radioGroup) => {
    let radios = document.getElementsByName(radioGroup)
    let selected;

    for (let radio of radios) {
        if (radio.checked) {
            selected = radio.value
        }
    }
    return selected
}