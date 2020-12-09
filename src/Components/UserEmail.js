import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

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

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: grey[700],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

export class UserEmail extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment marginAutoItem>
                    <h1>What's your email?</h1>
                        <ThemeProvider theme={theme}>
                            <TextField
                            variant="outlined"  
                            label ="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            color='primary'
                            />
                        </ThemeProvider>
                        <br />
                        <Grid container  justify='center'>
                            <Grid item xs={1}>
                                <ColorButton variant="contained" color="primary" onClick={this.back}>
                                    Go back
                                </ColorButton>
                            </Grid>
                            <Grid item xs={1    }>
                                <ColorButton variant="contained" color="primary" onClick={this.continue}>
                                    Continue
                                </ColorButton>
                            </Grid>
                        </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default UserEmail
