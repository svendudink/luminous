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
      story: ` Select different colors, <br></br>if no colors are selected,
        <br /> its will pick a random color,
        <br /> if one color is selected,
        <br /> it will remain on that color,
        <br /> if multiple colors are selected
        <br /> it will randomly rotate
        <br /> in between the colors selected`,
    },
    {
      storyName: "bulbId",
      color: "black",
      story: ` Every Lamp has its own Bulb ID.
        <br /> on the neck of the lamp you can find a QR code,
        <br /> scan the QR code or select the bulb manually, <br />
        this is done so the software knows
        <br /> where your bulb is placed and when to <br />
        perform the action requested`,
    },
    {
      storyName: "googleMap",
      color: "black",
      story: ` Every Lamp has its own Bulb ID.
        <br /> on the neck of the lamp you can find a QR code,
        <br /> scan the QR code or select the bulb manually, <br />
        this is done so the software knows
        <br /> where your bulb is placed and when to <br />
        perform the action requested`,
    },
    {
      storyName: "addLamp",
      color: "black",
      story: ` Add new Lamp: Add a lamp and it will be visible on the map,
        <br />
        Add before selected lamp: there will always be chronoligical order,{" "}
        <br />
        this makes it possible to add a lamp later without deleting a bunch of
        lights
        <br />
        Delete selected Lamp: this will delete the selected and move all
        <br />
        numbers down by one to keepthe chronological order <br /> Vertical and
        horizontal scan: have the lights move from left to right or from up to
        <br />
        down`,
    },
    {
      storyName: "video",
      color: "black",
      story: `this is a live video stream of 11 of the 132 bluetooth <br />
        lamps i made for events
        <br />
        the video stops after 4 minutes to keep the stress on the server low,
        <br />
        the video might be laggy, this is because it runs on a Ebay
        <br />
        kleinanzeigen purchased broken 25 euro laptop`,
    },
    {
      storyName: "eventControl",
      color: "black",
      story: `the bulbs travel with a speed of 0.625sec per bulbs, the travel pattern
        configures which direction they travel, up and down in chronological
        order, the whole group changing colors at the same time, or random
        changes, bulb colors can be set to the colors set in the event building
        section, or the can be set to fully random, this will ignore colors set
        in the event builder, the last one is to select the map the first step
        is to build the light file, when its ready it Can be send to the
        controller, starting of events can take up to 5 minutes, but can also
        only take a few seconds, the reason for this is, there is a lot of
        bluetooth interference in the house, which makes it often take a very
        long time to find its MESH path, in real live situations this is not a
        issue since the controller will not have 11 lights in its sight`,
    },
    {
      storyName: "server",
      color: "black",
      story: `the bulbs travel with a speed of 0.625sec per bulbs, the travel pattern
        configures which direction they travel, up and down in chronological
        order, the whole group changing colors at the same time, or random
        changes, bulb colors can be set to the colors set in the event building
        section, or the can be set to fully random, this will ignore colors set
        in the event builder, the last one is to select the map the first step
        is to build the light file, when its ready it Can be send to the
        controller, starting of events can take up to 5 minutes, but can also
        only take a few seconds, the reason for this is, there is a lot of
        bluetooth interference in the house, which makes it often take a very
        long time to find its MESH path, in real live situations this is not a
        issue since the controller will not have 11 lights in its sight`,
    },
  ];
};
