import { useImagePreloader } from "../hooks/preLoadImage";
import { preloadSrcList } from "../media/backgrounds/imageLoad/imageArray";

export default function Main() {
  const preLoad = useImagePreloader(preloadSrcList).percentage;

  return <div>Main</div>;
}
