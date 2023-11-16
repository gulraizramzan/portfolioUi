import {  useState } from "react"
import { useNavigate } from "react-router-dom";
import LoginApiServices from "../utils/loginApiServices";
import { Link } from "react-router-dom";
const SignUP=()=>{
  const navigate=useNavigate()
  // const[border,setBorderColor]=useState('border-gray-300')
  const [message,setMessage]=useState("")
    const [formData, setFormData] = useState({
      firstName:'',
      lastName:'',
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
  LoginApiServices.post("/create-users",formData).then((res)=>{
    navigate('/')
}).catch((err)=>{
    console.log(err)
})
}

    }


return(
    <>
 <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-aero-blue shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-10xl mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Sign up or Login to your account</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        {/* first name */}
						<div className="relative">
							<input  type="text"
                                name="firstName" 
                                value={formData.firstName}
                                onChange={handelChanges}
                                autoComplete="off" id="firstName"  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  text-gray-900 focus:outline-none focus:borer-rose-600"  placeholder="First Name" />
							<label htmlFor="Fisrt Name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" >First Name</label>
					            {formData.email===""? <p className={"text-red-600"}>{message}</p>:""}
          	                </div>
                            {/* last name */}
						<div className="relative">
							<input 
                              name="lastName" 
                              value={formData.lastName}
                              onChange={handelChanges}
                              autoComplete="off" id="lName" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Last Name" />
							<label htmlFor="Last Name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name</label>
					    	</div>
                            {/* emai address */}
                        <div className="relative">
							<input  type="email"
                                name="email" 
                                value={formData.email}
                                onChange={handelChanges}
                              autoComplete="off" id="email"  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  text-gray-900 focus:outline-none focus:borer-rose-600"  placeholder="Email address" />
							<label htmlFor="First Name" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" >Email Address</label>
				            	{formData.email===""? <p className={"text-red-600"}>{message}</p>:""}
                        	</div>
                            {/* password */}
                        <div className="relative">
							<input  type="password"
                               name="password" 
                               value={formData.password}
                              onChange={handelChanges}
                               autoComplete="off" id="password"  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  text-gray-900 focus:outline-none focus:borer-rose-600"  placeholder="Email address" />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" >Password</label>
					            {formData.email===""? <p className={"text-red-600"}>{message}</p>:""}
                         	</div>
                            {/* submit button */}
                          <div className="relative">
							<button className="bg-aero-blue text-black rounded-md h-10 w-full px-2 py-1 mt-10" onClick={handelSubmit}>SignUP</button>
			    			</div>
                            {/* login button */}
                        <div className="relative">
			    			<Link to='/login'>	<button className=" text-black rounded-md h-10 w-full px-2 py-1 mt-5" > Already have an account?Login</button>
				    		</Link>
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<footer className="footer">
<p className="text-center text-gray-500 text-xs">
    &copy;2023 Rose Corp. All rights reserved.
  </p>
</footer>


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

export default SignUP