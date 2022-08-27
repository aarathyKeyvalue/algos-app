import "./butstyles.css";
const Button = (props) => {
  const { label, className, type, handleClick } = props;
  return (
    <>
      <div>
        <button className={type } onClick={()=>handleClick()}>{label} </button>
      </div>
    </>
  );
};
export default Button;
