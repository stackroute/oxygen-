import React from 'react';
import Formsy from 'formsy-react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import { FormsyCheckbox, FormsyDate, FormsyRadio, FormsyRadioGroup,
    FormsySelect, FormsyText, FormsyTime, FormsyToggle, FormsyAutoComplete } from 'formsy-material-ui/lib';
import Request from 'superagent';
import TextField from 'material-ui/TextField';

const styles = {
  div: {
   width : 10,
    margin: 10,
    padding: 20,
  },
  switchStyle: {
    marginBottom: 16,
  },
  submitStyle: {
    marginTop: 32,
  },
  closeButton: {
    align: 'right',
    margin: 5
  },
  redBorder: {
    fontColor: 'red'
  }
}

export default class DissolveRelation extends React.Component {
  constructor(props) {
    super(props);
    this.deletePredicate = this.deletePredicate.bind(this);
    this.state = {
      predicateDetails: null,
      open: false,
    }
  }

  handleClose = () => {
    this.props.handleModal();
  };

  componentWillReceiveProps(nextProps){
    console.log(nextProps.predicateDetails);
    if(nextProps.predicateDetails !== null){
      this.setState({
        predicateDetails: nextProps.predicateDetails,
        open: nextProps.open
      });
      this.deletePredicate(nextProps.predicateDetails);
    }
  }

  deletePredicate(predicateDetails){
    if(predicateDetails['predicate'].length > 0){
      let url = `/domain/${predicateDetails.domainName}/subject/${predicateDetails.subnodetype}/${predicateDetails.subnodename}/object/${predicateDetails.objnodetype}/${predicateDetails.objnodename}/predicate/${predicateDetails.predicate}`;
      console.log(url);
      Request.delete(url)
      .end((err, res) => {
        if (err) {
            this.setState({errmsg: res.body, loading: 'hide'});
            this.props.nullPredicate();
        } else {
          console.log('here at delete');
          this.props.nullPredicate();
        }
      });
    }
  }

  render(){
    return null;
  }
}
