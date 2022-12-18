import { Button, Box } from "@chakra-ui/react"

const CombinedPage = () => {
    return (
        <Box>
            <Button margin="2%" fontSize="120%" fontWeight="bold">User Todos</Button>
            <Button margin="2%" fontSize="120%" fontWeight="bold">Calendar Events</Button>
        </Box>
    )
}

export {CombinedPage};