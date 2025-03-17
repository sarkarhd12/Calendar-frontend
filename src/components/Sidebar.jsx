
// import { useState } from "react";
// import { Button, Typography, List, ListItem, ListItemText } from "@mui/material";
// import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import useEvents from "../hooks/useEvents";
// import EventModal from "./EventModal"; // Import the modal component
// import dayjs from "dayjs";

// export default function Sidebar({ selectedDate, onDateChange }) {
//     const { eventMetadata } = useEvents(); // Fetch metadata
//     const {getEventMetadataById} = useEvents();
//     const [isModalOpen, setModalOpen] = useState(false);

//     return (
//         <div
//             style={{
//                 width: "100%",
//                 padding: "10px",
//                 borderRight: "1px solid #ddd",
//                 height: "100vh",
//                 overflowY: "auto",
//                 boxSizing: "border-box",
//                 scrollbarWidth: "thin",
//                 "&::-webkit-scrollbar": {
//                     width: "6px",
//                 },
//                 "&::-webkit-scrollbar-thumb": {
//                     backgroundColor: "#aaa",
//                     borderRadius: "4px",
//                 },
//             }}
//         >
//             <Button variant="contained" fullWidth onClick={() => setModalOpen(true)}>
//                 + Create Event
//             </Button>

//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DateCalendar value={selectedDate} onChange={onDateChange} />
//             </LocalizationProvider>

//             <Typography variant="h6" sx={{ marginTop: "10px" }}>
//                 Events
//             </Typography>
//             <List>
//                 {eventMetadata.map((meta) => (
//                     <ListItem key={meta.id} sx={{ borderBottom: "1px solid #eee" }}>
//                         <ListItemText
//                             primary={meta.title}
//                             secondary={`Start: ${dayjs(meta.startTime).format("hh:mm A")} | 
//                                        End: ${meta.endTime ? dayjs(meta.endTime).format("hh:mm A") : "Not provided"}`}
//                         />
//                     </ListItem>
//                 ))}
//             </List>

//             <EventModal open={isModalOpen} handleClose={() => setModalOpen(false)} event={null} />
//         </div>
//     );
// }




// import { useState } from "react";
// import { Button, Typography, List, ListItem, ListItemText } from "@mui/material";
// import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay"; // Import PickersDay
// import useEvents from "../hooks/useEvents";
// import EventModal from "./EventModal";
// import EventMetadataAction from "./EventMetadataAction";
// import dayjs from "dayjs";

// export default function Sidebar({ selectedDate, onDateChange }) {
//     const { eventMetadata, getEventMetadataById, fetchEvents, addEvent } = useEvents(); // Ensure addEvent is included
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [selectedEvent, setSelectedEvent] = useState(null);

//     const handleEventClick = async (id) => {
//         try {
//             const eventDetails = await getEventMetadataById(id);
//             console.log("eventDetails is here", eventDetails);
//             setSelectedEvent(eventDetails);
//         } catch (error) {
//             console.error("Failed to fetch event details:", error);
//         }
//     };

//     const refreshEvents = async () => {
//         await fetchEvents();
//     };

//     return (
//         <div style={{ width: "100%", padding: "10px", borderRight: "1px solid #ddd", height: "100vh", overflowY: "auto" }}>
//             <Button variant="contained" fullWidth onClick={() => setModalOpen(true)}>
//                 + Create Event
//             </Button>

//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DateCalendar 
//                     value={selectedDate} 
//                     onChange={onDateChange} 
//                     renderDay={(day, selectedDates, pickersDayProps) => {
//                         const isBooked = eventMetadata.some(event => 
//                             dayjs(event.startTime).isSame(day, 'day')
//                         );
                        
//                         return (
//                             <PickersDay
//                                 {...pickersDayProps}
//                                 sx={{ backgroundColor: isBooked ? "blue" : "white", color: isBooked ? "white" : "black" }}
//                             />
//                         );
//                     }}
//                 />
//             </LocalizationProvider>

//             <Typography variant="h6" sx={{ marginTop: "10px" }}>
//                 Events
//             </Typography>
//             <List>
//                 {eventMetadata.map((meta) => (
//                     <ListItem key={meta.id} sx={{ borderBottom: "1px solid #eee", cursor: "pointer" }} 
//                         onClick={() => handleEventClick(meta.id)}
//                     >
//                         <ListItemText
//                             primary={meta.title}
//                             secondary={`Start: ${dayjs(meta.startTime).format("hh:mm A")} | End: ${meta.endTime ? dayjs(meta.endTime).format("hh:mm A") : "Not provided"}`}
//                         />
//                     </ListItem>
//                 ))}
//             </List>

//             <EventModal
//                 open={isModalOpen}
//                 handleClose={() => setModalOpen(false)}
//                 event={null}
//                 addEvent={(event) => {
//                     addEvent(event);
//                     fetchEvents();
//                     setModalOpen(false);
//                 }}
//             />

//             <EventMetadataAction 
//                 open={Boolean(selectedEvent)} 
//                 handleClose={() => setSelectedEvent(null)} 
//                 eventId={selectedEvent ? selectedEvent.id : null} 
//                 refreshEvents={refreshEvents}
//             />
//         </div>
//     );
// }




import { useState } from "react";
import { Button, Typography, List, ListItem, ListItemText } from "@mui/material";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PickersDay } from "@mui/x-date-pickers/PickersDay"; // Import PickersDay
import useEvents from "../hooks/useEvents";
import EventModal from "./EventModal";
import EventMetadataAction from "./EventMetadataAction";
import dayjs from "dayjs";

export default function Sidebar({ selectedDate, onDateChange }) {
    const { eventMetadata, getEventMetadataById, fetchEvents, addEvent } = useEvents(); // Ensure addEvent is included
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = async (id) => {
        try {
            const eventDetails = await getEventMetadataById(id);
            console.log("Fetched event details:", eventDetails);
            if (eventDetails) {
                setSelectedEvent(eventDetails);
            } else {
                refreshEvents(); // If the event is not found, refresh the list
            }
        } catch (error) {
            console.error("Failed to fetch event details:", error);
        }
    };
    

    const refreshEvents = async () => {
        console.log("fetched events is here ",fetchEvents())
        await fetchEvents();
    };

    return (
        <div style={{ width: "100%", padding: "10px", borderRight: "1px solid #ddd", height: "100vh", overflowY: "auto" }}>
            <Button variant="contained" fullWidth onClick={() => setModalOpen(true)}>
                + Create Event
            </Button>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar 
                    value={selectedDate} 
                    onChange={onDateChange} 
                    renderDay={(day, selectedDates, pickersDayProps) => {
                        const isBooked = eventMetadata.some(event => 
                            dayjs(event.startTime).isSame(day, 'day')
                        );
                        
                        return (
                            <PickersDay
                                {...pickersDayProps}
                                sx={{ backgroundColor: isBooked ? "blue" : "white", color: isBooked ? "white" : "black" }}
                            />
                        );
                    }}
                />
            </LocalizationProvider>

            <Typography variant="h6" sx={{ marginTop: "10px" }}>
                Events
            </Typography>
            <List>
                {eventMetadata.map((meta) => (
                    <ListItem key={meta.id} sx={{ borderBottom: "1px solid #eee", cursor: "pointer" }} 
                        onClick={() => handleEventClick(meta.id)}
                    >
                        <ListItemText
                            primary={meta.title}
                            secondary={`Start: ${dayjs(meta.startTime).format("hh:mm A")} | End: ${meta.endTime ? dayjs(meta.endTime).format("hh:mm A") : "Not provided"}`}
                        />
                    </ListItem>
                ))}
            </List>

            <EventModal
                open={isModalOpen}
                handleClose={() => setModalOpen(false)}
                event={null}
                addEvent={(event) => {
                    addEvent(event);
                    fetchEvents();
                    setModalOpen(false);
                }}
            />

            <EventMetadataAction 
                open={Boolean(selectedEvent)} 
                handleClose={() => setSelectedEvent(null)} 
                eventId={selectedEvent ? selectedEvent.id : null} 
                refreshEvents={refreshEvents}
            />
        </div>
    );
}
