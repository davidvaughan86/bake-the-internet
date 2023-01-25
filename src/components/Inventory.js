import React from "react";
import CheeseCake from "./CSS/images/cheesecakejar.JPG";
import RedVelvet from "./CSS/images/redvelvetjar.JPG";
import CupCake from "./CSS/images/cupcakes.JPG";
import GummyPacks from "./CSS/images/gummypack.JPG";
import LemondPound from "./CSS/images/lemonpound.JPG";
import OilJar from "./CSS/images/oiljar.JPG";

const Inventory = () => {
  return (
    <div>
      <card>
        <img src={CheeseCake}></img>
      </card>
      <card>
        <img src={RedVelvet}></img>
      </card>
      <card>
        <img src={CupCake}></img>
      </card>
      <card>
        <img src={GummyPacks}></img>
      </card>
      <card>
        <img src={LemondPound}></img>
      </card>
      <card>
        <img src={OilJar}></img>
      </card>
    </div>
  );
};

export default Inventory;
