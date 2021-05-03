import { useState } from 'react';

import Button, {BUTTON_COLORS} from './Button';


const NumPad = ({onClick = () => { }, onCal = () => {}}) => {

    const buttonOnClickHandler = (val) => {
        onClick(val);
    };

    return (
        <div className="flex flex-column numpad">
            <div className="flex flex-row">
                <Button val="7" onClick={buttonOnClickHandler} />
                <Button val="8" onClick={buttonOnClickHandler} />
                <Button val="9" onClick={buttonOnClickHandler} />
            </div>
            <div className="flex flex-row">
                <Button val="4" onClick={buttonOnClickHandler} />
                <Button val="5" onClick={buttonOnClickHandler} />
                <Button val="6" onClick={buttonOnClickHandler} />
            </div>
            <div className="flex flex-row">
                <Button val="1" onClick={buttonOnClickHandler} />
                <Button val="2" onClick={buttonOnClickHandler} />
                <Button val="3" onClick={buttonOnClickHandler} />
            </div>
            <div className="flex flex-row">
                <Button val="0" onClick={buttonOnClickHandler} />
                <Button val="." onClick={buttonOnClickHandler} />
                <Button val="=" onClick={onCal} color={BUTTON_COLORS.GREEN}/>
            </div>
        </div>
    )
}

export default NumPad;