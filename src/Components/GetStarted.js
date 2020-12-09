import React, {Component}  from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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

export class GetStarted extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return(
         <div>
            <h1>Your favorite secret Santa generator!</h1>
            <br />
            <ColorButton variant="contained" color="primary" onClick={this.continue}>
                Get Started!
            </ColorButton>
                
        </div>
    )}
}

export default GetStarted
