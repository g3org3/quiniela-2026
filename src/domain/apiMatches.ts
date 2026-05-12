import { queryOptions } from "@tanstack/react-query";
import { DateTime } from "luxon";

export interface MatchType {
  MatchNumber: number;
  RoundNumber: number;
  DateUtc: string;
  Location: string;
  HomeTeam: string;
  AwayTeam: string;
  Group: string;
  HomeTeamScore: number | null;
  AwayTeamScore: number | null;
}

export const matchQueryOptions = queryOptions({
  queryKey: ["matches"],
  async queryFn() {
    const data: Promise<MatchType[]> = fetch("/api/matches").then((r) =>
      r.json(),
    );

    return await data;
  },
});

export function groupByDateSelector(data: MatchType[]) {
  const byDate: Record<string, MatchType[]> = {};

  for (let row of data.filter((m) => m.RoundNumber === 1)) {
    // usr_tz_date = users's timezone version of utc date
    const usr_tz_date = DateTime.fromSQL(row.DateUtc);
    const date = usr_tz_date.toISODate();
    if (!byDate[date!]) {
      byDate[date!] = [];
    }
    byDate[date!].push(row);
  }

  return byDate;
}
