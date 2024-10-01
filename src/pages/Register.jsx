import { useState, useContext } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";
import { UserContext } from "./../context/UserContext";

const Register = () => {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      setMessageType("danger");
      return;
    }

    if (password !== confirmPassword) {
      setMessage(
        "La contraseña y la confirmación de la contraseña no coinciden."
      );
      setMessageType("danger");
      return;
    }

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      setMessageType("danger");
      return;
    }

    try {
      await register(email, password);
      setMessage("Registro exitoso.");
      setMessageType("success");
    } catch (error) {
      setMessage("Error en el registro. Intenta de nuevo.");
      setMessageType("danger");
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="mt-4 container-form">
      <h2 className="mb-4">Registro</h2>
      {message && <Alert variant={messageType}>{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword" className="mb-3">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
