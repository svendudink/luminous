import React from "react";

import { useImagePreloader } from "../hooks/preLoadImage";
import { preloadSrcList } from "../media/imageLoad/imageArray";

export default function Main() {
  const preLoad = useImagePreloader(preloadSrcList).imagesPreloaded;

  return <div>Main</div>;
}
