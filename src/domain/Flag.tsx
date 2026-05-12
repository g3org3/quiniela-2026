import { countries } from "./countries";

interface Props {
  country: string;
  height?: `${string}px`;
}
export default function Flag(props: Props) {
  const country_iso2 = countries[props.country]?.iso2 || "";
  const flag = `fi fi-${country_iso2}`;
  const fontSize = props.height || "70px";

  return <span style={{ fontSize }} className={flag} />;
}
