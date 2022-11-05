import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestComponent from './Component/TestComponent';

function App() {
  function pursuitISA(salary) {
    salary = Number(salary);
    let grossMonthly = (salary / 12).toFixed(2);
    let pursuitMonthly = 0;

    // if (Number.isNaN(Number(salary))) {
    //   return `Sorry. Salary must be in number only format!`;
    // }

    if (salary > 70000) {
      pursuitMonthly = ((salary * 0.15) / 12).toFixed(2);
    } else if (salary >= 60000) {
      pursuitMonthly = ((salary * 0.1) / 12).toFixed(2);
    } else if (salary >= 50000) {
      pursuitMonthly = ((salary * 0.05) / 12).toFixed(2);
    }
    if (pursuitMonthly > 70000) {
      pursuitMonthly = 70000;
    }
    let leftOver = grossMonthly - pursuitMonthly;
    let totalToPursuit = pursuitMonthly * 48;
    if (totalToPursuit > 70000) {
      totalToPursuit = 70000;
    }

    return ` Hello ${fellow.name}! Your new job salary is $${salary}. Your gross monthly income is $${grossMonthly}. Every month, You have to pay Pursuit $${pursuitMonthly}. Before taxes, You will have $${leftOver} left over each month. At this salary, you will have paid $${totalToPursuit} to Pursuit over the next 48 months. you're welcome!`;
  }

  const [fellow, setFellow] = useState({
    name: '',
    salary: 0,
  });

  const [message, setMessage] = useState(null);

  const handleTextChange = (event) => {
    setFellow({ ...fellow, [event.target.id]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let message = pursuitISA(fellow.salary);
    setMessage(message);
  };

  return (
    <div className="App">
      <h2>Howdy Fellows! time to pay Pursuit </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>
            <h5>Fellow Name</h5>
          </Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            onChange={handleTextChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="salary">
          <Form.Label>
            <h5>Salary</h5>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="$$$$"
            onChange={handleTextChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="message">{message}</div>
      <TestComponent />
    </div>
  );
}

export default App;
