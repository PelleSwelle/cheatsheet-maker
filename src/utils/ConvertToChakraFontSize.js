export const convertToChakraFontSize = (value) => {
    let fontSize = ''
    if (value == 0) {fontSize = 'xs'}
    if (value == 1) {fontSize = 'sm'}
    if (value == 2) {fontSize = 'md'}
    if (value == 3) {fontSize = 'lg'}
    if (value == 4) {fontSize = 'xl'}
    return fontSize
}