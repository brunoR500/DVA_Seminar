import { BaseElement } from "../components/BaseElement";
import { Counter } from "../components/Counter";

const CounterMultiply = (props) => {
  return (
    <>
      <BaseElement name="Beschreibung">
        <p>
          Hier wird gezeigt wie man den State über alle Seiten hinüber verwenden
          kann. Auf dieser Seite können wir unseren Counter verdoppeln.
        </p>
      </BaseElement>
      <Counter
        count={props.count}
        action={() => props.setCount(props.count * 2)}
        actionName="Verdoppeln"
      />
    </>
  );
};

export default CounterMultiply;
