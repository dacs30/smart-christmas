import React from 'react'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// settings for the top btns
const ColorButton = withStyles((theme) => ({
    root: {
        width: '100%',
        color: theme.palette.getContrastText('#d72323'),
        backgroundColor: '#d72323',
        '&:hover': {
            backgroundColor: '#d72323',
        },
        boxShadow: '0px 0px 0px 0px'
    },
}))(Button);

function SecondQuestion(props) {

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
            <React.Fragment marginAutoItem>
                <h1>What's your favorite movie genre?</h1>
                <br />
                <Grid container alignContent='center' justify='center' direction='column' display='flex'>
                    <Grid item>
                        <ColorButton variant="contained" color="primary" onClick={goAhead}>
                            Action
                        </ColorButton>
                    </Grid>
                    <br />
                    <Grid item>
                        {/* needs implementation for routes */}
                        <ColorButton variant="contained" color="primary" onClick={goAhead}>
                            Sci-fi 
                        </ColorButton>
                    </Grid>
                    <br />
                    <Grid item>
                        <ColorButton variant="contained" color="primary" onClick={goAhead}>
                            Romance
                        </ColorButton>
                    </Grid>
                    <br />
                    <Grid item>
                        <ColorButton variant="contained" color="primary" onClick={goAhead}>
                            Comedy
                        </ColorButton>
                    </Grid>
                    <br />
                    <Grid item>
                        <ColorButton variant="contained" color="primary" onClick={goAhead}>
                            None of these
                        </ColorButton>
                    </Grid>
                </Grid>
                <br />
                <Grid container justify='center'>
                    <Grid item xs={1}>
                        <ColorButton variant="contained" color="primary" onClick={back}>
                            Go back
                        </ColorButton>
                    </Grid>
                </Grid>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default SecondQuestion
