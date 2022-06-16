import { BaseElement } from "../components/BaseElement";

const Home = () => {
  return (
    <>
      <div>
        <BaseElement name="Titel 1">
          <h1>Praktikum Abgabe 4 </h1>

          <img
            border="0"
            alt="bild"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/FH-Augsburg-Logo.svg/475px-FH-Augsburg-Logo.svg.png"
            width="100"
            height="100"
          />

          <p>
            Beschreibung: Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.{" "}
          </p>
        </BaseElement>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <BaseElement name="XSS">
            <h1>XSS</h1>
            <p>
              Beschreibung: Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.{" "}
            </p>
          </BaseElement>
        </div>

        <div className="flex-item">
          <BaseElement name="Inkrementieren">
            <h1>Inkrementieren</h1>
            <p>
              Beschreibung: Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.{" "}
            </p>
          </BaseElement>
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <BaseElement name="XSS">
            <h1>XSS</h1>

            <p>
              Beschreibung: Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.{" "}
            </p>
          </BaseElement>
        </div>

        <div className="flex-item">
          <BaseElement name="Inkrementieren">
            <h1>Inkrementieren</h1>
            <p>
              Beschreibung: Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.{" "}
            </p>
          </BaseElement>
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-item">
          <BaseElement name="Bootstrap">
            <h1>Bootstrap</h1>
            <p>
              Beschreibung: Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.{" "}
            </p>
          </BaseElement>
        </div>
      </div>
    </>
  );
};

export default Home;
