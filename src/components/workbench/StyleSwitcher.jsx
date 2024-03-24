import { Radio, Stack, RadioGroup, Box, Heading } from "@chakra-ui/react"

export default function StyleSwitcher({selected, onChange}) {
    return (
        <Box>
            <Heading as={'h2'} size={'sm'}>Display as...</Heading>
            
            <RadioGroup name="style-radio" onChange={onChange} value={"selected"}>
                <Stack direction={'column'}>
                    <Radio value={'columns'}>Columns</Radio>
                    <Radio value={'cards'}>Cards</Radio>
                </Stack>
            </RadioGroup>
        </Box>
    )
}