import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageContext from '../../services/ImageContext';
import './ModalDialog.scss';
import { Container } from 'react-bootstrap';

class ModalDialog extends React.Component {
  static contextType = ImageContext;

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };

  }

  _handleClose = () => this.setState({show: false});
  _handleShow = () => this.setState({show: true});

  componentDidUpdate(){
    if(this.context.show){
      this._handleShow();
      this.context.show = false;
    }
  }

  render() {
    const contextValue = this.context;
    console.log(contextValue);
    return (
      <div>
      <Modal
        show={this.state.show}
        onHide={this._handleClose}
        centered
      >
        <Modal.Body>
          <Container className='image-container'>
            <img src={contextValue?.src} alt=""/>
          </Container>
        </Modal.Body>
      </Modal>
      </div>
    );
  }
}

export default ModalDialog;
