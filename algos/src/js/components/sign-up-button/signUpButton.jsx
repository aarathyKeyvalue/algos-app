import "./styles.css";
import google from "../../../assets/main/Google-Icon.svg"
const SignupGoogle = (props) => {
  const { className,label ,handleClick} = props;
  return (
    <>
      <div className="divtag">
        <button className={className} onClick={()=>handleClick()}>
            
       
        <div className="googleimg">
        <img src={google} />
        </div>
        {label}
        </button>
      </div>
    </>
  );
};

export default SignupGoogle;
