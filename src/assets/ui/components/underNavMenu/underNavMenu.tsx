import { ItemNavMenu } from "./itemNavMenu/itemNavMenu";

export default function UnderNavMenu() {
  return (
    <div className="flex gap-5 justify-between h-full">
      <ItemNavMenu title="coffee" link="/coffee" icon="coffee" />
      <ItemNavMenu title="food" link="/food" icon="food" />
      <ItemNavMenu title="beans" link="/beans" icon="beans" />
    </div>
  );
}
