import { useState } from "react";
import { BaseElement } from "../components/BaseElement";

const XSS = () => {
  const [text, setText] = useState("Write some vulnerable text");
  return (
    <>
      <BaseElement name="Beschreibung">
        <p>
          In diesem Beispiel geht es um die Veranschaulichung der
          Standardsicherheit von React, in der Cross Site Scripting nicht
          möglich ist.
        </p>
      </BaseElement>
      <BaseElement name="XSS Demo">
        <p>{text}</p>
        <input
          placeholder={text}
          onChange={(event) => setText(event.target.value)}
        />
      </BaseElement>
    </>
  );
};

export default XSS;
