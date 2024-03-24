import {Box, Stack, Heading, Radio, RadioGroup } from "@chakra-ui/react"

export default function OrientationSwitcher({ onChange }) {
    return (
        <Box className="orientation-switcher">
            <Heading as={'h2'} size={'sm'}>Orientation</Heading>
            
            <RadioGroup onChange={onChange} value="vertical">
                <Stack>
                    <Radio value={'vertical'}>Vertical</Radio>
                    <Radio value={'horizontal'}>Horizontal</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    )
}