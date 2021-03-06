import React, { Component } from 'react';
import domToImage from 'dom-to-image';
import Controls from './Controls';
import DisplayMeme from './DisplayMeme';
import fileSaver from 'file-saver';
import styles from './Styles.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.memeRef = React.createRef();
  }

  state = {
    header: '',
    headerColor: '#000000',
    headerFont: 'arial',
    footer: '',
    footerColor: '#000000',
    footerFont: 'arial',
    imgUrl: ''
  };

generateMeme = () => {
  event.preventDefault();
  domToImage.toPng(this.memeRef.current)
    .then(imgUrl => {
      fileSaver.saveAs(imgUrl);
    });
};

handleChange = ({ target }) => {
  this.setState({ [target.name]: target.value }, () => {
  });
};

render() {  
  const { header, headerColor, headerFont, footer, footerColor, footerFont, imgUrl } = this.state;
  return (
      <>
      <div className={styles.display}>
        <h1>Meme generator</h1>
        <Controls 
          header={header}
          headerColor={headerColor}
          headerFont={headerFont}
          footer={footer}
          footerColor={footerColor}
          footerFont={footerFont}
          imgUrl={imgUrl}
          onChange={this.handleChange}
        />
        <button onSubmit={this.generateMeme}>Save</button>
        <DisplayMeme 
          memeRef={this.memeRef}
          header={header}
          headerColor={headerColor}
          headerFont={headerFont}
          footer={footer}
          footerColor={footerColor}
          footerFont={footerFont}
          imgUrl={imgUrl}
        />
      </div>
      </>

  );
}
}
