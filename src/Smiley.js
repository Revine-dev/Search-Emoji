import copy from "copy-to-clipboard";

const Smiley = (props) => {
  let isEnabled = "inherit";

  if (
    props.search &&
    props.keywords.indexOf(props.search) === -1 &&
    props.title.indexOf(props.search) === -1
  ) {
    isEnabled = "none";
    props.setHideEl(props.countHide + 1);
  }

  console.log(props.countHide, props.totalEl);

  return (
    <div
      className="smiley"
      data-copy="Click to copy"
      style={{ display: isEnabled }}
      onClick={() => copy(props.symbol)}
    >
      <div className="icon">{props.symbol}</div>
      <div className="title">{props.title}</div>
    </div>
  );
};

export default Smiley;
