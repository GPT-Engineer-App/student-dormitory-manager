import { Box, Container, Heading, Text } from "@chakra-ui/react";

const DormList = () => {
  return (
    <Container centerContent>
      <Box p={4}>
        <Heading>Dorm List</Heading>
        <Text>List of dorms will be displayed here.</Text>
      </Box>
    </Container>
  );
};

export default DormList;