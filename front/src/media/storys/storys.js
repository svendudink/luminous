import { useState } from "react";

export const Storys = (props) => {
  const [textColor, setTextColor] = useState("#195B8E");
  const storyArray = [
    {
      color: textColor,
      storyName: "mesh",
      story: `Bottle Luminous has a total of 132 Bottles, all connected over a
        Blueooth MESH network.`,
    },
    {
      color: textColor,
      storyName: "lmap1",
      story: `Bottle Luminous has a total of 132 Bottles, all connected over a
        Blueooth MESH network.`,
    },
    {
      color: textColor,
      storyName: "lamp2",
      story: `Completely waterproof as bulbs are sealed inside glass`,
    },
  ];
};
