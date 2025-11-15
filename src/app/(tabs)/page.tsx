import { Groups } from "./components/groups/Groups";
import { Info } from "./components/info/Info";
import { News } from "./components/news/News";

export default function Home() {
  return (
    <div className="py-10 grid gap-32">
      <News />
      <Groups />
      <Info />
    </div>
  );
}
