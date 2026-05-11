import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Flex
      minH="calc(100dvh - 96px)"
      bgGradient="linear(to-b, purple.50, white)"
    >
      <Box
        bg="white"
        borderRadius={{ base: 'none', md: '2xl' }}
        boxShadow={{ base: 'none', md: 'xl' }}
        borderWidth={{ base: '0px', md: '1px' }}
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
              Welcome back
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Enter your phone number to continue
            </Text>
          </Stack>

          <Stack spacing={4} as="form">
            <FormControl>
              <FormLabel fontSize="sm">Phone number</FormLabel>
              <Input
                type="tel"
                placeholder="+52 55 1234 5678"
                size="lg"
                autoComplete="tel"
                inputMode="tel"
              />
            </FormControl>

            <Button size="lg" colorScheme="purple" type="submit">
              Continue
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}
