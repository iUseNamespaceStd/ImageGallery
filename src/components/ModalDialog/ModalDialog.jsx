import React from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { ImageContext } from "../../services/ImageContext";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import "./ModalDialog.scss";

class ModalDialog extends React.Component {
  static contextType = ImageContext;

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      index: 0,
    };
  }

  _handleClose = () => this.setState({ show: false });
  _handleShow = () => this.setState({ show: true });
  _handleSelect = (selectedIndex) => this.setState({ index: selectedIndex });

  componentDidUpdate() {
    if (this.context.show) {
      this._handleShow();
      let currIndex = this.context?.imageDataArr.findIndex(
        (photo) => photo.id === this.context?.index
      );
      this._handleSelect(currIndex);
      this.context.show = false;
    }
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this._handleClose} centered>
          <Modal.Body>
            <Container className="image-container">
              <CarouselSlider
                activeIndex={this.state.index}
                onSelect={this._handleSelect}
              />
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ModalDialog;
