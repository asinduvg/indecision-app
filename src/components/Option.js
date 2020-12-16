import React from "react";

const Option = props => (
    <div className='option'>
        <p className='option__text'>{props.count}. {props.item}</p>
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