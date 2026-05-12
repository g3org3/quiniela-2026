import { Button, Flex, Text, Input } from "@chakra-ui/react";
import Flag from "./Flag";
import type { MatchType } from "./apiMatches";

interface Props {
  m: MatchType;
  onSave: VoidFunction
}

export default function Match(props: Props) {
  return (
    <Flex flexDir="column" alignItems="center">
      <Flex>{props.m.Group}</Flex>
      <Flex alignItems="center" gap={2}>
        <Flex flexDir="column" alignItems="center">
          <Flag country={props.m.HomeTeam} />
          <Text>{props.m.HomeTeam}</Text>
        </Flex>
        <Input textAlign="center" p={1} fontSize="30px" w="60px" h="70px" />
        vs
        <Input textAlign="center" p={1} fontSize="30px" w="60px" h="70px" />
        <Flex flexDir="column" alignItems="center">
          <Flag country={props.m.AwayTeam} />
          <Text fontSize="sm">{props.m.AwayTeam}</Text>
        </Flex>
      </Flex>
      <Button onClick={props.onSave} colorScheme="purple" size="sm" alignSelf="stretch">Guardar!</Button>
    </Flex>
  );
}
