import React from 'react'

// we are bringin the event from props 

export const CalendarEvent = ({event}) => {
    console.log(event)
    const{ title, user} = event // we want to use the title and name
    // in the calendarScreeen component we have the section 'Components' and we put the same that we have here
    return (
        <div>
            <strong>{title}</strong>
            <span> - {user.name}</span>
        </div>
    )
}
