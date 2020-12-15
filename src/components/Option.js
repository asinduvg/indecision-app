import React from "react";

const Option = props => (
    <div>
        {props.item}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.item)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;