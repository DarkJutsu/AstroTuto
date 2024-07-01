import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randmMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button onClick={() => setGreeting(randmMessage())}>Nuevo Mensaje</button>
    </div>
  );
}
