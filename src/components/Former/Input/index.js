import React, { useState } from 'react'
import Item from "./Item";
import ResetBtn from "./ResetBtn.js";

import config from './config'

import './input.scss'

export default function Input({
    params,
    onBntClick,
    onInputChange,
    onResetBnt
}) {
    // state = {
    //     isOpen: true,
    //     isReset: false
    // };

    const [isOpen, setIsOpen] = useState(true);
    // const [isReset, setIsReset] = useState(false);

    // const handleHeadClick = () => {
    //     this.setState((state) => ({
    //         isOpen: !state.isOpen
    //     }));
    // };

    const handleHeadClick = () => {
        setIsOpen( !isOpen );
    };

    // let {
    //     onBntClick,
    //     onInputChange,
    //     isReset,
    //     onResetBnt
    // } = this.props;

    const list = config.map( ({ label, input }) => {
        const { name } = input;
        const value = params[name]

        return <Item
            value = { value }
            label = { label }
            input = { input }
            key = { name }

            onClick = { onBntClick }
            onChange = { onInputChange }
        />
    });

    let clsParams = isOpen ? 'open' : null;

    return (
        <div id="input_params" className = { clsParams }>
            <h4 onClick = { handleHeadClick } >
                Parameters
            </h4>

            <ul>
                { list }
                <ResetBtn
                    onClick = { onResetBnt }
                    isReset = { params.isReset }
                />
            </ul>
        </div>
    )
    
}
