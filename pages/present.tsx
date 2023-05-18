import DownSide from "@/pagePart/downSide";
import MidSide from "@/pagePart/midSide";
import TopSide from "@/pagePart/topSide";
import { useRouter } from "next/router";

export default function Present() {
  const router = useRouter();

  function handleRout(path: string) {
    router.push(path);
  }
  return (
    <div className="mainP">
      <div className="main-container">
        <TopSide />
        <MidSide />
        <DownSide />
      </div>
    </div>
  );
}
