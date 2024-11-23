import { Button, Grid, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.currentTarget);

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"), 
            email: data.get("email"),
            password: data.get("password")
        };
        console.log("userData : ", userData);
    }

  return (
    <div>
      
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} >
                    <TextField
                    required
                    id='firstName'
                    name="firstName"
                    label="First Name"
                    labelfor="firstName"
                    fullWidth
                    autoComplete="given-name"
                    />
                </Grid>

                <Grid item xs={12} sm={6} >
                    <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    labelfor="lastName"
                    fullWidth
                    autoComplete="given-name"
                    />
                </Grid>

                <Grid item xs={12} >
                    <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    labelfor="email"
                    fullWidth
                    autoComplete="email"
                    />
                </Grid>

                <Grid item xs={12} >
                    <TextField
                    required
                    id="password"
                    name="password"
                    label="Password"
                    labelfor="password"
                    fullWidth
                    autoComplete="password"
                    />
                </Grid>

                <Grid item xs={12} >
                    <Button
                    className="bg-[#9155fd] w-full"
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{padding:".8rem 0", bgcolor:"#9155fd"}}
                    >
                        Register
                    </Button>
                </Grid>

            </Grid>
        </form>

        <div className="flex justify-center items-center">
            <div className="flex items-center py-3">
                <p>Already have an account? </p>
                <Button onClick={() => navigate("/login")} className="ml-5" size="small" >Login</Button>
            </div>
        </div>

    </div>
  )
}

export default RegisterForm
