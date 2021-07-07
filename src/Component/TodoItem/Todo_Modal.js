import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { mapStateTProps , mapDispatchToProps } from './../TodoSetting/Todo'
import { Button } from 'react-bootstrap'
import './Todo_Modal.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor : "#333", 
    borderRadius : "20px",
    fontFamily: "Lucida Handwriting" 
  }
};

class ModalForm extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="Modal-section">
        <Button className='List-Btn' 
        variant="warning"
        onClick={this.openModal}
        style={{fontFamily: "Lucida Handwriting" }}
        >
          Edit
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <h3 className="modal-title">Update Your Task</h3>
          <form className="Modal-field">
            <input
              type='text'
              id='ModalInput'
              placeholder={this.props.Task.description}
              onChange={e => this.props.updateInput(e.target.value)}
            />
            <div>
            <Button 
             className='Modal-Btn' 
             onClick={this.closeModal}
             variant="danger"
             >
              close
            </Button>
            <Button
              className='Modal-Btn'
              onClick={() => {
                this.props.handleEdit({
                  id: this.props.Task.id,
                  description : this.props.description
                });
                this.closeModal();
              }}
              variant="success"
            >
              Submit
            </Button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateTProps, mapDispatchToProps)(ModalForm);