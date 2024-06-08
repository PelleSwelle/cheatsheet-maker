import { Card, CardHeader, CardBody, Box, Stack, Checkbox, CheckboxGroup, Heading } from "@chakra-ui/react"

export default function DetailSettingsCard({ onTopicDetailChange, onGroupingDetailChange, onItemDetailChange }) {

    return (
        <Box>
            <Heading as={'h3'} size={'md'}>How much detail at each level</Heading>

            <CheckboxGroup>
                <Stack>
                    <Checkbox
                        value={'topic'}
                        onChange={onTopicDetailChange}>
                        Topic Description
                    </Checkbox>

                    <Checkbox
                        value={'grouping'}
                        onChange={onGroupingDetailChange}>
                        Grouping Description
                    </Checkbox>

                    <Checkbox
                        value={'item'}
                        onChange={onItemDetailChange}>
                        Item Description
                    </Checkbox>
                </Stack>
            </CheckboxGroup>
        </Box>
    )
}