import { Box, Select } from "@chakra-ui/react";
const FontController = ({ onSelectSize }) => {

    const itemHeadingSize = 20;

    /**
     * 6xl, 5xl, 4xl, 3xl, 2xl, xl, lg, md, sm, xs
     */

    return (
        <Box>
            <label>
                Font Size
                <Select id="item-description-font-size-select" onChange={onSelectSize}>
                    <option value={'xs'}>Extra Small</option>
                    <option value={'sm'}>Small</option>
                    <option value={'md'}>Medium</option>
                    <option value={'lg'}>Large</option>
                    <option value={'xl'}>Extra large</option>
                </Select>
            </label>
        </Box>
        // <div className="slide-container">
        //     <label>
        //         <input type="range" min={5} max={40} defaultValue={itemHeadingSize} className="slider" id="item-heading-size-slider"/>

        //     </label>
        // </div>
    )
}

export { FontController }