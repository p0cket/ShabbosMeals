import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {shabbatTime} from '../../api/hebcal';
//import Grid from 'material-ui/Grid';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';




class Login extends React.Component {

  state = {
    shabTime: ""
  }

  componentDidMount() {
    shabbatTime().then( resp => {
      console.log(resp);

      this.setState({shabTime: resp.items[0].title.substring(17)});
    })
  };

  render() {
    const divStyle = {
      margin: 'auto',
    };

    return(
      <div style={divStyle}>
        <Grid container spacing={24} justify="center">
          <Grid item>
            <h1>Have Plans yet?</h1>
            <h3> {"Candle Lighting is at " + this.state.shabTime}</h3>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <TextField
              hintText="A really jewish name"
              floatingLabelText="Name"
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <TextField
              hintText="A really jewish neighborhood"
              floatingLabelText="neighborhood"
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <TextField
              hintText="A really jewish food"
              floatingLabelText="favorite food"
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <RaisedButton
              label="Continue"
              primary={true}
            />
          </Grid>
        </Grid>
    </div>
    )
  }
}

export default Login;
