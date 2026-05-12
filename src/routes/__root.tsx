import {
  createRootRoute,
  Link,
  Outlet,
  useSearch,
} from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import Login from "../domain/Login";

const RootLayout = () => {
  const { auth } = useSearch({ from: "/" });
  if (!auth) {
    return <Login />;
  }
  return (
    <>
      <Flex bg="whitesmoke" flex="1" flexDir="column" overflow="auto">
        <Flex
          p={3}
          h="56px"
          bgGradient="linear(to-t, purple.50, white)"
          boxShadow="md"
          alignItems="center"
          zIndex={1}
        >
          <Text fontWeight="bold" fontSize="18px">
            Quiniela
          </Text>
          <Spacer />
          <Link to="/">
            <Button size="sm" variant="ghost">
              Logout
            </Button>
          </Link>
        </Flex>
        <Outlet />
      </Flex>
      <Flex h="40px" bg="blue.600"></Flex>
      <Toaster richColors position="top-center" />
    </>
  );
};

export const Route = createRootRoute({ component: RootLayout });
