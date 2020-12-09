import React from 'react'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Button from '@material-ui/core/Button';
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
        // Purple and green play nicely together.
        main: grey[700],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

// not passing the number of players
function NumberOfPlayers(props) {

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
                <h1>How many players will join?</h1>
                <ThemeProvider theme={theme}>
                    <FormControl variant="outlined">
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            onChange={props.handleChange('numberOfPlayers')}
                            value={props.values.numberOfPlayers}
                            color='primary'
                            displayEmpty
                        >
                            <MenuItem value=''>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
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

export default NumberOfPlayers
