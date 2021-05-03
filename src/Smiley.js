import copy from "copy-to-clipboard";

const Smiley = (props) => {
  return (
    <div
      className="smiley"
      data-copy="Click to copy"
      onClick={() => copy(props.symbol)}
    >
      <div className="icon">{props.symbol}</div>
      <div className="title">{props.title}</div>
    </div>
  );
};

export default Smiley;
