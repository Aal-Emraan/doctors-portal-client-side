import { Button, Grid, Paper} from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking}) => {
    const {name, time, space} = booking;
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{ color: 'primary.main' }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} Spaces Available
                </Typography>
                <Button variant="outlined" onClick={handleOpen}>Book Appointment</Button>
                <BookingModal open={open} handleClose={handleClose}></BookingModal>
            </Paper>
        </Grid>
    );
};

export default Booking;