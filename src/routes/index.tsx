import { Flex } from "@chakra-ui/react";
import z from "zod";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { groupByDateSelector, matchQueryOptions } from "../domain/apiMatches";
import Match from "../domain/Match";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: z.object({
    auth: z.string().nullish(),
  }),
});

function Index() {
  const { data = {} } = useQuery({
    ...matchQueryOptions,
    queryKey: matchQueryOptions.queryKey.concat(["group-by-date"]),
    select: groupByDateSelector,
  });

  const dates = Object.keys(data);
  const onSave = () => {
    toast.success('Guardado')
  };

  if (!data) return <Flex>no data</Flex>;

  return (
    <Flex
      overscrollBehavior="contain"
      flex="1"
      flexDir="column"
      gap={2}
      bg="white"
      overflow="auto"
    >
      {dates.map((fecha) => (
        <>
          <Flex bg="whitesmoke" fontWeight="600" p={1}>
            {fecha}
          </Flex>
          <Flex p={2} flexDir="column">
            {data[fecha].map((match) => (
              <Match m={match} onSave={onSave} />
            ))}
          </Flex>
        </>
      ))}
    </Flex>
  );
}
