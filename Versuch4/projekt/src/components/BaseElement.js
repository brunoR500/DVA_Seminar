export const BaseElement = (props) => {
  return (
    <div className="element-rahmen">
      <div className="element-name">{props.name}</div>
      <div className="element-content">{props.children}</div>
    </div>
  );
};
