
// Scrib-lab
import {BsSunFill} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="flex justify-between bg-black">
      <div className="absolute p-6 text-2xl text-white cursor-pointer font-PacificoMainHeading left-10" onClick={()=>{
        navigate("/")
      }}>Scrib-lab</div>
      <div className="pt-4 pr-9">
        <div className="absolute p-2 rounded-lg right-10 bg-slate-100">
          <BsSunFill size={24} />
        </div>
      </div>
    </div>
  );
};


export default Navbar