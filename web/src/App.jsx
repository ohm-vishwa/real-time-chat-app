import "./App.css";
import { Show, SignInButton, UserButton } from "@clerk/react";

function App() {
  return (
    <>
      <h1>hello world</h1>

      <Show when="signed-out">
        <SignInButton mode="modal" />
        {/* <SignUpButton /> */}
      </Show>
      <Show when="signed-in">
        <UserButton />
      </Show>
    </>
  );
}

export default App;
