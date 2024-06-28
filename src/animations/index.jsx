import "@/assets/styles/global.scss";
function Spinner({ style }) {
  return (
    <div className="lds-roller" style={style}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
