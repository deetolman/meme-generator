import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fileSaver from 'file-saver';

export default class FileSaver extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired
  };

  saveFile = ({ img }) => {
    fileSaver.saveAs({ img });
  };

  render() {
    return (
      <>
        <img src={this.props.img} />
        <button onClick={this.saveFile}>Save File</button>
      </>
    );
  }
}
