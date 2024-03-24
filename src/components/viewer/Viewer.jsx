import { Center } from "@chakra-ui/react"

export default function Viewer({ children }) {
    return (
        <Center className="viewer">
            {children}
        </Center>
    )
}