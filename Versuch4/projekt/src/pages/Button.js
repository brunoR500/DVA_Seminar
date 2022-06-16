import { BaseElement } from "../components/BaseElement";

const Button = () => {
  return (
    <>
      <BaseElement name="React Button">
        <p>
          <code>
            {`
        <button onClick={() => alert("Button was clicked")}>
          React Button
        </button>`}
          </code>
        </p>
        <button onClick={() => alert("Button was clicked")}>Click me!</button>
      </BaseElement>
      <BaseElement name="HTML Button">
        <p>In HTML nötig:</p>
        <code> {'<button id="mybutton">Mein Button</button>'}</code>
        <p>In Javascript:</p>
        <code>
          {
            '<script>document.getElementById("mybutton").addEventListener("click", () => alert("Button was clicked"));</script>'
          }
        </code>
      </BaseElement>
    </>
  );
};
export default Button;
