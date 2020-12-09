import Navbar from './Navbar'
import './App.css';
import UserForm from './Components/UserForm';
import { Grid } from '@material-ui/core';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Grid container alignItems='center' justify='center' direction='column' style={{minHeight:  '75vh'}}>
        <UserForm fullwidth />
      </Grid>
    </div>
  );
}

export default App;
