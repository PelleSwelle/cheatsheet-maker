import OrientationSwitcher from "./OrientationSwitcher";
import StyleSwitcher from "./StyleSwitcher";
import { Box, Heading } from "@chakra-ui/react";

export default function StyleSettingsCard({ styleSelected, onStyleChange, onOrientationChange }) {
    return (
        <Box>
            <Heading as={'h2'} size={'md'}>
                Style
            </Heading>

            <OrientationSwitcher onChange={onOrientationChange} />

            <StyleSwitcher selected={styleSelected} onChange={onStyleChange}/>
        </Box>
    )
}