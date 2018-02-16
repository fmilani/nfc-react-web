import { Component } from 'react';

export default class Nfc extends Component {
  readTag = () => {
    navigator.nfc.watch(
      message => {
        console.log(JSON.stringify(message.records[0]));
      },
      { mode: 'any' },
    );
  };

  componentDidMount() {
    this.readTag();
  }

  render() {
    return null;
  }
}
