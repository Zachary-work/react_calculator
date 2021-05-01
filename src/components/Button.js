export const BUTTON_COLORS = {
    BLUE: "blue",
    GREEN: "green"
}

const Button = ({label, val, onClick = () => {}, color = BUTTON_COLORS.BLUE}) => {
    return (
        <a onClick={() => {
            console.log('onClick', val);
            onClick(val);
        }} className={`numButton ${color}-button`}>{(label) ? label : val}</a>
    )
};

export default Button;