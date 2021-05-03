import Button, {BUTTON_COLORS} from './Button';

const Operator = ({onClick=() => {}}) => {
    return (
        <div className="flex flex-column operators">
            <Button label="÷" val="/" onClick={onClick} color={BUTTON_COLORS.GREEN}/>
            <Button label="×" val="*" onClick={onClick} color={BUTTON_COLORS.GREEN}/>
            <Button val="-" onClick={onClick} color={BUTTON_COLORS.GREEN}/>
            <Button val="+" onClick={onClick} color={BUTTON_COLORS.GREEN}/>
        </div>
    );
}

export default Operator;