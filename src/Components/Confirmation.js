import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


// settings for the top btns
const ColorButton = withStyles((theme) => ({
    root: {
    color: theme.palette.getContrastText('#d72323'),
    backgroundColor: '#d72323',
    '&:hover': {
        backgroundColor: '#d72323',
    },
    boxShadow: '0px 0px 0px 0px'
    },
}))(Button);

function Confirmation() {

    return (
        <div>
            <h1>You are all set!</h1>
            <h2>It's time to share the link with the other players.</h2>
            <h2>Copy and share the link below</h2>
            <p id='gameLink'>secretsanta.com/game?id=73637673</p>
            <ColorButton variant="contained" color="primary" onClick={() => {navigator.clipboard.writeText(document.getElementById('gameLink').innerHTML)}}>
                Copy link
            </ColorButton>
        </div>
    )
}

export default Confirmation

