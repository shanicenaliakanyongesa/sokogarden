import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const[success,setSuccess]=useState('')
 

const[error,setError]=useState('')

 

const submit=async(e)=>{
e.preventDefault()

try {
const formData = new FormData();

formData.append("email",email);
formData.append("password",password)

const response = await axios.post("https://modcom2.pythonanywhere.com/api/signin",formData)
setSuccess(response.data.message)
 

 

} catch (error) {
setError(error.message)
 

}
}
 

return (
<div className='row justify-content-center mt-4'>
<div className='col-md-6 card shadow p-4'>

<h2>Sign In</h2>
<p className="text-success"> {success}</p>
<p className="text-danger"> {error}</p>

 

<form onSubmit={submit}>
<input type="email"
className="form-control"
placeholder='Enter your email'
value={email}
onChange={(e)=>setEmail(e.target.value)}

 

/> <br />
{/* {email} */}
<input type="password"
className="form-control"
placeholder='Enter your password'
value={password}
onChange={(e)=>setPassword(e.target.value)}

/> <br />
{/* {password} */}
<br />

<button className="btn btn-primary" type='submit'>Signin</button>
</form>

<br />
<p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

</div>
</div>
)
}

export default Signin;
