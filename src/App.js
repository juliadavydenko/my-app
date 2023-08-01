import "./App.css";
import "./index.css";

import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Checkout />
    </div>
  );
}

export default App;

// const { steps, currentStepIndex, step } = useMultistepForm(
//   <div>One</div>,
//   <div>Two</div>
// );
// return (
//   <div
//     style={{
//       position: "relative",
//       background: "white",
//       border: "1px solid black",
//       padding: "2rem",
//       margin: "1rem",
//       borderRadius: ".5rem", // for rounded corners
//       fontFamily: "Ubuntu",
//     }}
//   >
//     <form>
//       <div
//         style={{
//           position: "absolute",
//           top: ".5rem",
//           right: ".5rem",
//         }}
//       >
//         {currentStepIndex + 1} / {steps.length}
//       </div>
//       {step}
//       <div style
//     </form>
//   </div>
// );
// }
