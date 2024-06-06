import { Box, Container, Heading, Text } from "@chakra-ui/react";

const RoomList = () => {
  return (
    <Container centerContent>
      <Box p={4}>
        <Heading>Room List</Heading>
        <Text>List of rooms will be displayed here.</Text>
      </Box>
    </Container>
  );
};

export default RoomList;