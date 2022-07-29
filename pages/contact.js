import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function contact() {
  return (
    <div className="container">
      <div className="row">
        <h1 style={{ marginTop: "1em", marginBottom: "1em" }}>Contact Me</h1>
        <p>
          Please contact me if you have any questions or concerns I will be
          happy to answer anything you may have!
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address:</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control type="message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default contact;
