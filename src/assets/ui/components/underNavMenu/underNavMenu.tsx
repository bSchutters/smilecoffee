import { ItemNavMenu } from "./itemNavMenu/itemNavMenu";

export default function UnderNavMenu() {
  return (
    <div className="flex gap-5 justify-between h-full">
      <ItemNavMenu title="coffee" link="/menu/coffee" icon="coffee" />
      <ItemNavMenu title="food" link="/menu/food" icon="food" />
      <ItemNavMenu title="beans" link="/menu/beans" icon="beans" />
    </div>
  );
}
