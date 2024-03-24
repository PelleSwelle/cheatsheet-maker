import { HStack, Icon, VStack, Heading, Box, Flex } from '@chakra-ui/react';
import MainIcon from '../../assets/mainIcon'

export default function Workbench({ children }) {

    return (
        <VStack className="workbench">
            <HStack>
                <Heading as={'h1'}>Cheatsheet Maker</Heading>
            </HStack>

            <Box>
                {children}
            </Box>
        </VStack>
    )
}