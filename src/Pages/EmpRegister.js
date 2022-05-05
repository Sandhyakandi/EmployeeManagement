import LinearStepper from "./LinearStepper";
import Navbar from './Navbar';

import './EmpRegister.css';
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
const EmpRegister=()=>{


    return(<div className="register">
       <Navbar/>
       <div>
       <h1 style={{textAlign:"center",color:"blue"}}>Registration form</h1>
<CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
        </div>
        </div>);
}
export default EmpRegister;