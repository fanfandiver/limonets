import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';


class FormContact extends Component {
  render() {
    return (
        <div>
            <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="Nom" placeholder="Nom" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="Prénom" placeholder="Prénom" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Objets</Form.Label>
                <Form.Control as="select">
                <option>Rensègnement</option>
                <option>Aide</option>
                <option>Anulation </option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="outline-secondary">Envoyé</Button>
            </Form>
        </div>
    );
  }
}
export default FormContact;
