import { Box, Container, Heading, Text } from "@chakra-ui/react";

const UserList = () => {
  return (
    <Container centerContent>
      <Box p={4}>
        <Heading>User List</Heading>
        <Text>List of users will be displayed here.</Text>
      </Box>
    </Container>
  );
};

export default UserList;