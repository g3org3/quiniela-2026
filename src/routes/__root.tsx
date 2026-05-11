import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

const RootLayout = () => (
  <ChakraProvider>
    <Flex bg="whitesmoke" flex="1" flexDir="column">
      <Flex p={3} h="56px" bg="white" boxShadow="sm" alignItems="center">
        <Text fontWeight="bold" fontSize="18px">
          Quiniela
        </Text>
      </Flex>
      <Outlet />
    </Flex>
    <Flex h="40px" bg="blue.600"></Flex>
  </ChakraProvider>
);

export const Route = createRootRoute({ component: RootLayout });
