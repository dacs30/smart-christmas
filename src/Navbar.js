import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Logo from './smart-logo-red.png'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';

// for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overlay: {zIndex: 5000},
    width: '50%'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

// classes for the items
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: "flex"
  },
  image: {
    alignItems: "center",
    flex: 1,
  },
  btn: {
    flex: 1,
    alignItems: "center",
    alignContent: 'center',
    justifyContent: 'center'
  }
}));

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

export default function ButtonAppBar() {

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

  const classes = useStyles();


  return (
    <div>
      <AppBar position="static" className={classes.container} style={{ backgroundColor: '#e3e3e3', boxShadow: "0px 0px 0px 0px" }}>
        <Toolbar className={classes.btn}>
          <div className={classes.image} onClick={() => {window.location.reload()}}>
            <img alt={'Smart Christmas'} style={{ width: 200, }} src={Logo}></img>
          </div>
          <div className={classes.btn}>
            <Grid container spacing={3} style={{ justifyContent: 'center' }}>
              <Grid item>
                <ColorButton variant="contained" color="primary" className={classes.margin} onClick={openModal}>
                  About
                </ColorButton>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Grid container alignItems='center' justify='center' direction='column'>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>About</h2>
          <br />
          <p style={{wordWrap: 'breakWord', width: '75%'}}>
          Smart Christmas is a secret Santa generator packed with features and themes to let the
          users customize their games. Unlike current apps available in the market, Smart
          Christmas will suggest a gift to give to your "match" based on a small set of 3 questions
          that everyone in the game should choose to answer. The questions will all be multiple choice and
          regarding the users' lifestyle. In addition to the suggestion generator, the app will count
          with a theme option, so users can select if they want themed gifts (like movie-themed or
          fun gifts) suggestions. In order to work, the app must have one "host user," creating the
          game and sharing the link with others. The targeting user is anyone who plays
          Christmas games.
          </p>
          <br />
          <br />
          <ColorButton variant="contained" color="primary" onClick={closeModal}>
            Close
            </ColorButton>
        </Grid>
      </Modal>
    </div>
  );
}
