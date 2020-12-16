import React from "react";

const Action = props => (
    <div>
        <button className='big-button' disabled={!props.hasOptions} onClick={props.pick}>What should I do next?</button>
    </div>
);

export default Action;