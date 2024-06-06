import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container centerContent>
      <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue" width="full">Login</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;