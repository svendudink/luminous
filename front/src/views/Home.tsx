import React from "react";

import { useImagePreloader } from "../hooks/preLoadImage";
import { preloadSrcList } from "../media/imageLoad/imageArray";

export default function Home() {
  const preLoad = useImagePreloader(preloadSrcList).imagesPreloaded;

  return preLoad && <div>Main</div>;
}
