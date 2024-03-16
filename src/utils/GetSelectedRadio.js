export const getSelectedRadio = () => {
    let radios = document.getElementsByName('style-radio')
    let selected;

    for (let radio of radios) {
        if (radio.checked) {
            selected = radio.value
        }
    }
    return selected
}