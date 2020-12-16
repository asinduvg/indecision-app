import React from "react";

const Option = props => (
    <div>
        {props.item}
        <button className='button button--link'
                onClick={(e) => {
                    props.handleDeleteOption(props.item)
                }}
        >
            remove
        </button>
    </div>
);

export default Option;