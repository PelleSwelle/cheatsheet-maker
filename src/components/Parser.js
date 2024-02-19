// this will (hopefully) generalize the schema to be able to take any form and depth of array of objects.
// Should utilize recursion, but recursion iz difikult. Will get to it.
export default function ObjectParser(input) {
    const numberOfElements = input.length;

    for (let i = 0 ; i < input.length; i++) {
        
        // get depth of elements
        let length = input[i].length;
    }
}