import { useState } from "react";

export const Storys = (props) => {
  const [textColor, setTextColor] = useState("#195B8E");
  const storyArray = [
    {
      storyName: "mesh",
      color: textColor,
      story: `Bottle Luminous has a total of 132 Bottles, all connected over a
        Blueooth MESH network.`,
    },
    {
      storyName: "lmap1",
      color: textColor,
      story: `Bottle Luminous has a total of 132 Bottles, all connected over a
        Blueooth MESH network.`,
    },
    {
      storyName: "lamp2",
      color: textColor,
      story: `Completely waterproof as bulbs are sealed inside glass`,
    },
    {
      storyName: "lamp3",
      color: textColor,
      story: `<div
        style={{ color: textColor }}
        onMouseLeave={() => setLampBackground("startPagewhitea")}
      >
        <p1> 16.7 Million colours to choose from, try a few </p1>
        <Button onClick={() => setLampBackground("lamp3b")}>Red</Button>
        <Button onClick={() => setLampBackground("lamp3d")}>Yellow</Button>
        <Button onClick={() => setLampBackground("lamp3c")}>Blue</Button>
      </div>`,
    },
    {
      storyName: "lamp4",
      color: textColor,
      story: `Bulbs are all controlled from 1 Rooted android device, which is in turn
        controlled by the NodeJS server`,
    },
    {
      storyName: "mapManager",
      color: "black",
      story: `Select a map to change the colors or<br></br>
        Create your own event map <br></br>
        this will be the first step setting up a light event`,
    },
    {
      storyName: "colors",
      color: "black",
      story: `Select a map to change the colors or<br></br>
        Create your own event map <br></br>
        this will be the first step setting up a light event`,
    },
    {
      storyName: "mapManager",
      color: "bulbId",
      story: ` Every Lamp has its own Bulb ID.
        <br /> on the neck of the lamp you can find a QR code,
        <br /> scan the QR code or select the bulb manually, <br />
        this is done so the software knows
        <br /> where your bulb is placed and when to <br />
        perform the action requested`,
    },
    {
      storyName: "mapManager",
      color: "bulbId",
      story: ` Every Lamp has its own Bulb ID.
        <br /> on the neck of the lamp you can find a QR code,
        <br /> scan the QR code or select the bulb manually, <br />
        this is done so the software knows
        <br /> where your bulb is placed and when to <br />
        perform the action requested`,
    },
  ];
};
