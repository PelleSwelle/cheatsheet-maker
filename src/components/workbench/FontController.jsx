import { Text, Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Heading, Checkbox } from "@chakra-ui/react";

const FontController = ({ name, value, onChange, id, IsTogglable }) => {
    return (
        <Box pt={6}>
            <Text as={'h3'} size={'sm'}>
                {name}
                {IsTogglable ? <Checkbox marginLeft={5}/> : null}  
            </Text>
            
            <Slider
                id={id}
                defaultValue={value} 
                min={0} 
                max={4} 
                step={1} 
                onChange={(value) => onChange(value)}
            >
                <SliderMark value='0'> xs </SliderMark>
                <SliderMark value='1'> s </SliderMark>
                <SliderMark value='2'> m </SliderMark>
                <SliderMark value='3'> l </SliderMark>
                <SliderMark value='4'> xl </SliderMark>
                
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                
                <SliderThumb />
            </Slider>
        </Box>
    )
}

export { FontController }