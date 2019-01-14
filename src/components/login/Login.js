import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {shabbatTime} from '../../api/hebcal';
//import Grid from 'material-ui/Grid';
import {GridList, GridTile} from 'material-ui/GridList';




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
      margin: '40px',
    };

    return(
      <div style={divStyle}>
        <h1>Have Plans yet?</h1>
        <h3> {"Candle Lighting is at " + this.state.shabTime}</h3>
        <GridList cols={3}>
          <GridTile
            title="Have any plans"
            alignContent="center"
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLFUge_HUrRpABEyHAcP240DY1QAmUG8z5vXTBrBgMxxI6Ovuc1Q" alt="" />
          </GridTile>
        </GridList>
        <TextField
          hintText="A really jewish name"
          floatingLabelText="Name"
        />
        <br/>
        <TextField
          hintText="A really jewish neighborhood"
          floatingLabelText="neighborhood"
        />
        <br/>
        <TextField
          hintText="A really jewish food"
          floatingLabelText="favorite food"
        />
        <br/>
        <RaisedButton
          label="Continue"
          primary={true}
        />
    </div>
    )
  }
}

export default Login;
