import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

class Card extends Component {

  render() {
    return (
      <>
        <MDBCard className="col-4" >
          <MDBCardText>
            <h1>This is cold pic</h1>
          </MDBCardText>
          <MDBCardImage src={this.props.img} position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{this.props.title}</MDBCardTitle>
            <MDBBtn href='#'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </>

    );
  }
}

export default Card;