import { Button, Typography } from '@mui/material'
import { Grid } from '@mui/material'


const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgColor: 'black', color: 'white', py: 3, minHeight: '7rem' }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-5' variant="h6">{" "}Company{" "}</Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}Jobs</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}Partners</Button>
                    </div>


                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-5' variant="h6">{" "}Solutions{" "}</Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}MARKETING</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}ANALYTICS</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}INSIGHTS</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>{" "}SUPPORTS</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-5' variant="h6">Documentation</Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>GUIDES</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>API STATUS</Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <div>
                        <Typography className='pb-5' variant="h6">Legal</Typography>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>CLAIM</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>POLICY</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant="h6" gutterBottom>TERMS</Button>
                    </div>
                </Grid>
                <Grid>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
