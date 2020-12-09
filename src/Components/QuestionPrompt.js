import React from 'react'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

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

function QuestionPrompt(props) {
    const goAhead = e => {
        e.preventDefault();
        props.nextStep();
    }

    const back = e => {
        e.preventDefault();
        props.prevStep();
    }

    const jump = e => {
        e.preventDefault();
        props.jumpTo(9);
    }

    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <MuiThemeProvider>
            <React.Fragment marginAutoItem>
                <h1>Would you like to answer three quick questions?</h1>
                <br />
                <Grid container justify='center'>
                    <Grid item xs={1}>
                        <ColorButton variant="contained" color="primary" onClick={goAhead}>
                            Yes!
                                </ColorButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ColorButton variant="contained" color="primary" onClick={jump}>
                            No
                        </ColorButton>
                    </Grid>
                    <Grid item xs={1}>
                        <ColorButton variant="contained" color="primary" onClick={openModal}>
                            Why?
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
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Grid container alignItems='center' justify='center' direction='column'>
                        <h2 ref={_subtitle => (subtitle = _subtitle)}>Why do we use the questions?</h2>
                        <br />
                        <p>
                            Smart Christmas use these questions to generate a gift suggestion to you
                        </p>
                        <p>
                            to the other player that will receive you as their match.
                        </p>
                        <br />
                        <br />
                        <ColorButton variant="contained" color="primary" onClick={closeModal}>
                                Close
                        </ColorButton>
                    </Grid>
                </Modal>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

export default QuestionPrompt
