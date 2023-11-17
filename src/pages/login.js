import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginApiServices from "../utils/loginApiServices";
import { setUser } from "../redux/userSlice";
const Login=()=>{
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const [message,setMessage]=useState("")
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handelChanges=(event)=>{
        const {name, value}=event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

const handelSubmit=(event)=>{
event.preventDefault();
setMessage("Enter email")
if(formData.email==="" || formData.password === "")
{
  console.log("enter password or email")
  
  // setBorderColor('border-red-300')
}
else
{
    const res=LoginApiServices.post("/user-login",formData).then((res)=>{

    dispatch(setUser(res.data.user));
    localStorage.setItem("token",res.data.token)
    localStorage.setItem("user",res.data.user._id)
    localStorage.setItem("name",res.data.user.firstName)
    localStorage.setItem("email",res.data.user.email)
    localStorage.setItem("role",res.data.user.isAdmin)
    
    navigate('/')
}).catch((err)=>{
    console.log(err)
})
}

    }

    const handelPassword=()=>{
      navigate('/forgotpass')
    }
    const handelSignUp=()=>{
      navigate('/signup')
    }



return(
    <>
 <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-aero-blue shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Login to your account or Sign up </h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  type="email"
          name="email" 
          value={formData.email}
          onChange={handelChanges}
         id="email"  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  text-gray-900 focus:outline-none focus:borer-rose-600"  placeholder="Email address" />
							<label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" >Email Address</label>
					{formData.email===""? <p className={"text-red-600"}>{message}</p>:""}
          	</div>
						<div className="relative">
							<input 
               value={formData.password}
               onChange={handelChanges}
              id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
          <div className="content-end">
          <button className=" text-black hover:underline" onClick={handelPassword}> Forgot Password</button>
              </div>
            <div className="relative">
							<button className="bg-aero-blue text-black rounded-md h-10 w-full px-2 py-1 mt-10" onClick={handelSubmit}>Login</button>
						</div>
            <div className="relative">
							<button className=" text-black rounded-md h-10 w-full px-2 py-1 mt-5 hover:underline" onClick={handelSignUp}> No account?Signup</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



    {/* <form>
        <div>
        <h1 className="text-3xl font-bold text-center">
      Hello world!
    </h1>
      <label>Enter your name:
        <input
          type="email"
          name="email" 
          value={formData.email}
          onChange={handelChanges}
        />
      </label>
      </div>
      <div>
      <label>Enter your name:
        <input
          type="password"
          name="password" 
          value={formData.password}
          onChange={handelChanges}
        />
      </label>
      </div>
      <button onClick={handelSubmit}>Submit</button>
    </form> */}
    
    </>
)
}

export default Login