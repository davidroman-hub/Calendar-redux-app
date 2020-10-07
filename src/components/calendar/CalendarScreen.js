import React from 'react'
import {Calendar,  momentLocalizer} from 'react-big-calendar';

import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../../src/styles.css';
import 'moment/locale/es'; // to change the langue

import Navbar from '../ui/Nabvar';
import {messages} from '../../helpers/calendar-messages-es';


const localizer = momentLocalizer(moment) // or globalizeLocalizer
moment.locale('es')


const events = [{
    title:'Cumple del jefe',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgColor:'#fafafa',
    notes:'Comprar el pastel'
}]

export const CalendarScreen = () => {
    

    const eventStylesGetter = (event, start, end, isSelected) => {
        //styles 
        console.log(event, start, end, isSelected)
        const style ={
            backgroundColor:'#367CF7',
            borderRadius:'0px',
            opacity:0.8,
            display:'block',
            color:'white'
            
        }

        return{
            style
        }
    };

    
    return (
        <div className='calendar-screen'>
            <Navbar/>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    messages = {messages} // to change the langue 
                    eventPropGetter={eventStylesGetter}
                />

        </div>
    )
}
