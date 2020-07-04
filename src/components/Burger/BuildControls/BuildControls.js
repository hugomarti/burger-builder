import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salada", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}$</strong>{" "}
    </p>
    {controls.map((ctr) => (
      <BuildControl
        key={ctr.label}
        removed={() => props.ingredientRemoved(ctr.type)}
        added={() => props.ingredientAdded(ctr.type)}
        label={ctr.label}
        disabled={props.disabled[ctr.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      className={classes.OrderButton}
      disabled={!props.purchasable}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
