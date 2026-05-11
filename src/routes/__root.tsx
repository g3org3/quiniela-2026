import {
  createRootRoute,
  Link,
  Outlet,
  useSearch,
} from "@tanstack/react-router";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Login from "../domain/Login";

const RootLayout = () => {
  const { auth } = useSearch({ from: "/" });
  if (!auth) {
    return <Login />;
  }
  return (
    <>
      <Flex bg="whitesmoke" flex="1" flexDir="column">
        <Flex p={3} h="56px" bg="white" boxShadow="sm" alignItems="center">
          <Text fontWeight="bold" fontSize="18px">
            Quiniela
          </Text>
          <Spacer />
          <Link to="/">
            <Button variant="ghost">Logout</Button>
          </Link>
        </Flex>
        <Outlet />
      </Flex>
      <Flex h="40px" bg="blue.600"></Flex>
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
