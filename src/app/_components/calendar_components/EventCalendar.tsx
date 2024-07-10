'use client'

import React, { useState } from 'react'
import { clientCallTypeToProcedureType } from '@trpc/client'
import { DialogContent, DialogContentText, Grid, Typography } from '@mui/material'
import {FC} from 'react'
import moment, { Moment } from 'moment'
import { EventsData } from '~/app/types/EventCalendarType'
import useEventCalendar from '~/app/Hooks/useEventCalendar'
import Controls from './Controls'
import Day from './Days'
import ExtraDays from './ExtraDays'

interface Props {
    data: EventsData
    onDataChange?: (events: EventsData) => void;
}


const d: EventsData = [ 
    {
      id: 0,
      date: new Date(),
      popupContent: <>This will show in popup</>,
      title: "Test 0",
      color: '#003'
    },
    {
      id: 1,
      date: moment().subtract(2, 'days'),
      popupContent: <>This will show in popup</>,
      title: "Test 1",
      color: '#342'
    },
  ]

const EventCalendar: FC<Props> = ({data, onDataChange}) =>  {
    const {date, changeMonth, daysGrid} = useEventCalendar();

    const addNewEventHandler = (title: string, content: string, date: Moment) => {
      if(title !== '' && content !== '') {
        const newDataArray = [...data]
        newDataArray.push({
          title, 
          popupContent: <DialogContent>
            <DialogContentText>{content}</DialogContentText>
          </DialogContent>,
          date,
          color: '#fff'
        })
        onDataChange?.(newDataArray)
      }
    }

  return (

    <div className='bg-gradient-to-t from-[#500889] to-[#440674] flex justify-center items-center pb-[5rem]'>
        <div className='bg-[#dfb7ff] bg-opacity-60 h-10/12 w-1/2 flex flex-col justify-center items-center rounded-r-md mt-[8rem]'>
            {/* Controls */}
            <Controls changeMonth={changeMonth} date={date}/>
            {/* Calendar */}
            <Grid container >
                {daysGrid.map((item, i) => (item?.no ? 
                    <Day 
                      key={i} 
                      daysGridLenght={daysGrid.length} 
                      i={i} 
                      item={item} 
                      events={data.filter(d => item.date.isSame(d.date, 'day'))}
                      addNewEventHandler={addNewEventHandler}/> 
                    : <ExtraDays key={i} daysGridLength={daysGrid.length} i={i}/>)
                )}
            </Grid>
        </div>
    </div>
  )
}

export default EventCalendar