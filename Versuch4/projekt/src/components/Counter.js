import { BaseElement } from "./BaseElement";

export const Counter = (props) => {
  return (
    <BaseElement name="Counter">
      <p>{props.count}</p>
      <button onClick={() => props.action()}>{props.actionName}</button>
    </BaseElement>
  );
};
