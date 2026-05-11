import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      minH="calc(100dvh - 96px)"
      align="center"
      justify="center"
      px={4}
      py={8}
      bgGradient="linear(to-b, purple.50, white)"
    >
      <Box
        w="full"
        maxW="420px"
        bg="white"
        borderRadius="2xl"
        boxShadow="xl"
        borderWidth="1px"
        borderColor="gray.100"
        p={{ base: 6, md: 8 }}
      >
        <Stack spacing={6}>
          <Stack spacing={2} textAlign="center">
            <Flex
              mx="auto"
              h="56px"
              w="56px"
              align="center"
              justify="center"
              borderRadius="full"
              bg="purple.600"
              color="white"
              fontSize="22px"
              fontWeight="bold"
            >
              Q
            </Flex>
            <Heading size="lg" color="gray.800">
              Bienvenido
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Ingresa tu numero de telefono <br />
              para usar la Quiniela 2026
            </Text>
          </Stack>

          <Stack spacing={4} as="form" method="GET">
            <FormControl>
              <FormLabel fontSize="sm">Telefono</FormLabel>
              <Input
                type="text"
                name="auth"
                placeholder="23690747"
                size="lg"
                autoComplete="phone"
              />
            </FormControl>

            <Button size="lg" colorScheme="purple" type="submit">
              Continuar
            </Button>
          </Stack>

          <Divider />

          <Text fontSize="sm" color="gray.500" textAlign="center">
            Derechos reservados.
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
}
