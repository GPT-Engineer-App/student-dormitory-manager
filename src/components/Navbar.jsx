import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Home
          </Link>
          <Link as={NavLink} to="/login" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Login
          </Link>
          <Link as={NavLink} to="/students" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Students
          </Link>
          <Link as={NavLink} to="/accounts" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Accounts
          </Link>
          <Link as={NavLink} to="/dorms" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Dorms
          </Link>
          <Link as={NavLink} to="/rooms" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Rooms
          </Link>
          <Link as={NavLink} to="/users" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Users
          </Link>
          <Link as={NavLink} to="/settings" px={2} py={1} rounded="md" _hover={{ textDecoration: 'none', bg: 'blue.700' }} _activeLink={{ bg: 'blue.900' }}>
            Settings
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;