import styled from "styled-components";

export default function App() {
  // App.js
  // ...
  const Button = styled.button`
    background: ${(props) => (props.primary ? "black" : "white")};
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 3px;
  `;

  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
}
