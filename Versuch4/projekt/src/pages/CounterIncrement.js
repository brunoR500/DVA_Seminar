import { Counter } from "../components/Counter";
import { BaseElement } from "../components/BaseElement";
const CounterIncrement = (props) => {
  return (
    <>
      <BaseElement name="Beschreibung">
        <p>
          Hier wird gezeigt wie man den State über alle Seiten hinüber verwenden
          kann. Auf dieser Seite können wir unseren Counter inkrementieren.
        </p>
      </BaseElement>
      <Counter
        count={props.count}
        action={() => props.setCount(props.count + 1)}
        actionName="Inkrementieren"
      />
    </>
  );
};

export default CounterIncrement;
