import { Link } from "react-router-dom"
const ForgotPassword=()=>{
    return(
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-aero-blue shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Enter E mail to reset password </h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  type="email"
          name="email" 
    
          autoComplete="off" id="email"  className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300  text-gray-900 focus:outline-none focus:borer-rose-600"  placeholder="Email address" />
							<label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm" >Email Address</label>
					{/* {formData.email===""? <p className={"text-red-600"}>{message}</p>:""} */}
          	</div>
            <div className="relative">
							<button className="bg-aero-blue text-black rounded-md h-10 w-full px-2 py-1 mt-10" >Submit</button>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}

export default ForgotPassword