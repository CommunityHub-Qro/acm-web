import {  Grid, Typography, useTheme } from '@mui/material'
import {FC, useState} from 'react'
import { Event as EventType } from '../../types/EventCalendarType' 

interface Props {
  event: EventType
  i: number
}

const Event: FC<Props> = ({event, i})  => {
  
  const [showDialog, setshowDialog] = useState(false)

  return (
    <>
    <div className=' cursor-pointer mt-[0.1rem] mr-[0.1rem] rounded-full z-0 absolute top-1 right-0' onClick={() => setshowDialog(true)}>
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Typography variant='caption' component='div' className='bg-[#c93d3d] rounded-full w-2 md:w-5 h-2 md:h-5 relative left-1 md:left-2 ' >
          
        </Typography>
      </Grid>
    </div>
        {/* <Dialog open={showDialog} onClose={() => setshowDialog(false)} >
          <DialogTitle>{event.title}</DialogTitle>
          {event.content}
        </Dialog> */}
    </>
  )
}

export default Event