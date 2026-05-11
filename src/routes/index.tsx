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
import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: z.object({
    auth: z.string().nullish(),
  }),
});

function Index() {
  return <>hi</>;
}
