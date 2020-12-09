import React from 'react'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

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
        main: grey[700],
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

function Themes(props) {

    const goAhead = e => {
        e.preventDefault();
        props.nextStep();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }


    return (
        <MuiThemeProvider>
            <React.Fragment>
                <h1>Select a theme for the game</h1>
                <ThemeProvider theme={theme}>
                    <FormControl variant="outlined">
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={props.handleChange('theme')}
                            value={props.values.theme}
                            color='primary'
                            displayEmpty
                        >
                            <MenuItem value=''>None</MenuItem>
                            <MenuItem value={3}>Coffe Mug</MenuItem>
                            <MenuItem value={4}>WPI</MenuItem>
                            <MenuItem value={5}>Movies</MenuItem>
                            <MenuItem value={6}>Fun</MenuItem>
                        </Select>
                    </FormControl>
                </ThemeProvider>
                <br />
                <Grid container justify='center'>
                    <Grid item xs={1}>
                        <ColorButton variant="contained" color="primary" onClick={back}>
                            Go back
                        </ColorButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ColorButton variant="contained" color="primary" onClick={goAhead}>
                            Continue
                        </ColorButton>
                    </Grid>
                </Grid>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default Themes
