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
      story: `Server updates is there to view what happens <br />
        in between the server and the controller, <br />
        much is done with ADB, extracting frames, <br />
        from the android device to verify <br />
        and to send touch events which control the device in <br />
        direct control mode`,
    },
  ];
};

export const AboutStory = () => {
  return (
    <div className="AboutStory">
      <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'ol{margin:0;padding:0}table td,table th{padding:0}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Arial";font-style:normal}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left;height:11pt}.c2{padding-top:0pt;padding-bottom:0pt;line-height:1.15;orphans:2;widows:2;text-align:left}.c3{background-color:#ffffff;max-width:451.4pt;padding:72pt 72pt 72pt 72pt}.title{padding-top:0pt;color:#000000;font-size:26pt;padding-bottom:3pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:0pt;color:#666666;font-size:15pt;padding-bottom:16pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Arial"}p{margin:0;color:#000000;font-size:11pt;font-family:"Arial"}h1{padding-top:20pt;color:#000000;font-size:20pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-size:16pt;padding-bottom:6pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:16pt;color:#434343;font-size:14pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:14pt;color:#666666;font-size:12pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:12pt;color:#666666;font-size:11pt;padding-bottom:4pt;font-family:"Arial";line-height:1.15;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}',
        }}
      />
      <p className="c2">
        <span className="c0" style={{ fontSize: "17px", fontWeight: "bold" }}>
          How it began
        </span>
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0">
          Bottle Luminous started when my partner, Sarah and I showed interest
          in creating a lighting project for a small art festival around Berlin.
          I already had some experience with smart lights at home so it seemed
          like something to expand upon and make some cool path lightning. I had
          dreams to make it possible to change the colours of each light too.
        </span>
      </p>

      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0" style={{ fontSize: "17px", fontWeight: "bold" }}>
          Controlling the lights
        </span>
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0">
          One of the biggest challenges was that the LED bulbs are controlled by
          an android app with very limited functionality. Here the first
          programming challenge started. As a junior web developer I did not
          have the skills yet to write a complex low level Bluetooth driver. The
          chosen approach was: reverse engineering. I rooted an android device,
          and made 2 clone images of the phone, one with a lightbulb on, and one
          with the lightbulb off, by doing a deep compare of the 2 clone images,
          it came to light which file and line was responsible for turning the
          lights on and off, from here it was just simply a case of modifying
          the android file, create modified routines with javascript, and
          sending those commands. (Android Debugging Mode)
        </span>
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0" style={{ fontSize: "17px", fontWeight: "bold" }}>
          How the bulbs are connected
        </span>
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0">
          The lightbulbs are connected through Bluetooth MESH, this means, the
          Bridge (android smartphone), is only connected to one lightbulb, this
          lightbulb is connected to every lightbulb in its reach, so far the
          longest chain we made, was 700 metres, but there is no reason to
          believe that this length is anywhere near the maximum
        </span>
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0" style={{ fontSize: "17px", fontWeight: "bold" }}>
          Why the QR code on the Bottle:
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Every Bottle has its own unique ID, this ID lets the script know where
          it is positioned, this is important for patterns like going up and
          down, and for individual dimming
        </span>
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0" style={{ fontSize: "17px", fontWeight: "bold" }}>
          What set up looks like
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Step 1: Place the bottles into position on the event and connect them
          with power
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Step 2: Create a event map in the event manager
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Step 3: Add lamps and position them on the google maps according to
          their location
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Step 4: Click on the bulbs, and the popup window shows up to assign an
          ID to your lamp{" "}
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          position, this can be done through the scan function, or this is
          possible by manually{" "}
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Step 5: Click Create a lightfile in the Basic controller functions
          tab,{" "}
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Step 6: Click Reboot device in download mode (make sure the android
          device is connected)
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          Step 7: Start routine on OSRAM app, the routine is around 24 hours
          long. It might take upto 5 minutes before the routine will show. The
          reason for this is that it sends a custom step by step routine file to
          the device with around 300.000 steps the app was not made to be
          reverse engineered it did work very well though
        </span>
      </p>
      <p className="c1">
        <span className="c0" />
      </p>
      <p className="c2">
        <span className="c0" style={{ fontSize: "17px", fontWeight: "bold" }}>
          Can i rent the lights for my event?:
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          No, the lights are not for rent, if you would like the lights to be at
          your event.
        </span>
      </p>
      <p className="c2">
        <span className="c0">
          you can contact me, if i like your event i might consider coming to
          your event and i could bring the lights, what i wish for is, to cover
          the costs for some spare bulbs and cables, and to cover any travel
          costs, we can pre negotiate the costs, and it would be spend as an art
          grand, also, after the event i would like to have any fancy empty
          glass bottles
        </span>
      </p>
    </div>
  );
};
