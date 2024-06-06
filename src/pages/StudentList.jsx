import { Box, Container, Heading, Text } from "@chakra-ui/react";

const StudentList = () => {
  return (
    <Container centerContent>
      <Box p={4}>
        <Heading>Student List</Heading>
        <Text>List of students will be displayed here.</Text>
      </Box>
    </Container>
  );
};

export default StudentList;