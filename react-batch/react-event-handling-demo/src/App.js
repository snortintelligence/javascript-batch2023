// import './App.css';
import FormInputEvent from './events/form/FormInputEvent';
import FormSubmitEvent from './events/form/FormSubmitEvent';
import KeyboardEvents from './events/keyborad/KeyboardEvents';
import MouseClickEvent from './events/mouse/MouseClickEvent';
import MouseDoubleClickEvent from './events/mouse/MouseDoubleClickEvent';
import MouseDownEvent from './events/mouse/MouseDownEvent';
import MouseOutEvent from './events/mouse/MouseOutEvent';
import MouseOverEvent from './events/mouse/MouseOverEvent';
import MouseUpEvent from './events/mouse/MouseUpEvent';
import WindowEvents from './events/window/WindowEvents';
import CreateProduct from './products/CreateProduct';
import Product from './products/Product';

function App() {
  return (
    <div className="App m-3">
      {/* <MouseClickEvent></MouseClickEvent>
      <MouseOverEvent></MouseOverEvent>
      <MouseDoubleClickEvent></MouseDoubleClickEvent>
      <MouseOutEvent></MouseOutEvent>
      <MouseDownEvent></MouseDownEvent>
      <MouseUpEvent></MouseUpEvent> */}
      {/* key events */}
      {/* <KeyboardEvents></KeyboardEvents> */}
      {/* <WindowEvents></WindowEvents> */}
      {/* <FormInputEvent></FormInputEvent> */}
      {/* <FormSubmitEvent></FormSubmitEvent> */}
      {/* <Product></Product> */}
      <CreateProduct></CreateProduct>
    </div>
  );
}

export default App;
