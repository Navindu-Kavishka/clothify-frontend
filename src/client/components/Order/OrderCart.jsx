import { Grid } from "@mui/material"
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCart = () => {
  return (
    <div className="p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

        <Grid item xs={6}>

            <div className="flex cursor-pointer">
                <img className="w-[5rem] h-[5rem] object-cover object-top" src="" alt="ord item img" />
                <div className="ml-5">
                    <p>Product Title</p>
                    <p className="opacity-50 text-xs font-semibold">Size: L</p>
                    <p className="opacity-50 text-xs font-semibold">Color: Red</p>
                </div>
            </div>
        </Grid>

        <Grid item xs={2}>
            <p>LKR 2000</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div>
                <p>
                <AdjustIcon sx={{width:'15px', height:'15px'}} className="text-green-600 mr-2 text-sm"/>
                <span>
                    Deliverd on October 20
                </span>
                
                </p>

                <p className="text-xs">
                    Your Item has been Deliverd
                </p>

                </div>}
            {false && <p>
                <span>
                    Expected Delivery on December 20
                </span>
            </p>}
        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCart
