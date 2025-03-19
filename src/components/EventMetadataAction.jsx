// import { useEffect, useState } from "react";
// import { 
//     Button, Dialog, DialogActions, DialogContent, DialogTitle, 
//     TextField, CircularProgress 
// } from "@mui/material";
// import dayjs from "dayjs";
// import useEvents from "../hooks/useEvents";

// export default function EventMetadataAction({ open, handleClose, eventId }) {
//     const { getEventMetadataById, updateEventMetadata, deleteEventMetadata } = useEvents();
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({});

//     useEffect(() => {
//         if (!eventId) return;

//         const fetchEvent = async () => {
//             setLoading(true);
//             try {
//                 console.log("Fetching event with ID:", eventId);
//                 const data = await getEventMetadataById(eventId);
//                 console.log("Fetched Event:", data);
//                 setEvent(data);
//                 setFormData(data);
//             } catch (error) {
//                 console.error("Error fetching event:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEvent();
//     }, [eventId]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSave = async () => {
//         try {
//             console.log("updated dara ",formData)
//             await updateEventMetadata(eventId, formData);
//             alert("Event updated successfully!");
//             handleClose();
//         } catch (error) {
//             console.error("Error updating event:", error);
//             alert("Failed to update event.");
//         }
//     };

//     const handleDelete = async () => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this event?");
//         if (confirmDelete) {
//             try {
//                 await deleteEventMetadata(eventId);
//                 alert("Event deleted successfully!");
//                 handleClose();
//             } catch (error) {
//                 console.error("Error deleting event:", error);
//                 alert("Failed to delete event.");
//             }
//         }
//     };

//     if (!eventId) return null;

//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Edit Event</DialogTitle>
//             <DialogContent>
//                 {loading ? (
//                     <CircularProgress />
//                 ) : event ? (
//                     <>
//                         <TextField
//                             label="Title"
//                             name="title"
//                             fullWidth
//                             margin="dense"
//                             value={formData.title || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Description"
//                             name="description"
//                             fullWidth
//                             margin="dense"
//                             multiline
//                             rows={3}
//                             value={formData.description || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Venue"
//                             name="venue"
//                             fullWidth
//                             margin="dense"
//                             value={formData.venue || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Attendee Email"
//                             name="attendeesEmails"
//                             fullWidth
//                             margin="dense"
//                             value={formData.attendeesEmails || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Start Time"
//                             name="startTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.startTime ? dayjs(formData.startTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />  
//                         <TextField
//                             label="End Time"
//                             name="endTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.endTime ? dayjs(formData.endTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />
//                     </>
//                 ) : (
//                     <p>No event found.</p>
//                 )}
//             </DialogContent>
//             <DialogActions>
//                 <Button color="primary" onClick={handleSave}>Save</Button>
//                 <Button color="error" onClick={handleDelete}>Delete</Button>
//                 <Button onClick={handleClose}>Close</Button>
//             </DialogActions>
//         </Dialog>
//     );
// }



// import { useEffect, useState } from "react";
// import { 
//     Button, Dialog, DialogActions, DialogContent, DialogTitle, 
//     TextField, CircularProgress 
// } from "@mui/material";
// import dayjs from "dayjs";
// import useEvents from "../hooks/useEvents";

// export default function EventMetadataAction({ open, handleClose, eventId, refreshEvents }) {
//     const { getEventMetadataById, updateEventMetadata, deleteEventMetadata } = useEvents();
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({});

//     useEffect(() => {
//         if (!eventId) return;

//         const fetchEvent = async () => {
//             setLoading(true);
//             try {
//                 console.log("Fetching event with ID:", eventId);
//                 const data = await getEventMetadataById(eventId);
//                 console.log("Fetched Event:", data);
//                 setEvent(data);
//                 setFormData(data);
//             } catch (error) {
//                 console.error("Error fetching event:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEvent();
//     }, [eventId]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSave = async () => {
//         try {
//             console.log("Updated data:", formData);
//             await updateEventMetadata(eventId, formData);
//             alert("Event updated successfully!");
//             refreshEvents(); // Refresh event list after updating
//             handleClose();   // Close dialog
//         } catch (error) {
//             console.error("Error updating event:", error);
//             alert("Failed to update event.");
//         }
//     };

//     const handleDelete = async () => {
//         if (!window.confirm("Are you sure you want to delete this event?")) return;

//         try {
//             await deleteEventMetadata(eventId);
//             // alert("Event deleted successfully!");
//            await refreshEvents(); // Refresh event list after deletion
//             // Close dialog
//             // setEvent(null)
//             handleClose(); 

//         } catch (error) {
//             console.error("Error deleting event:", error);
//             alert("Failed to delete event.");
//         }
//     };


    
    


//     if (!eventId) return null;

//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Edit Event</DialogTitle>
//             <DialogContent>
//                 {loading ? (
//                     <CircularProgress />
//                 ) : event ? (
//                     <>
//                         <TextField
//                             label="Title"
//                             name="title"
//                             fullWidth
//                             margin="dense"
//                             value={formData.title || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Description"
//                             name="description"
//                             fullWidth
//                             margin="dense"
//                             multiline
//                             rows={3}
//                             value={formData.description || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Venue"
//                             name="venue"
//                             fullWidth
//                             margin="dense"
//                             value={formData.venue || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Attendee Email"
//                             name="attendeesEmails"
//                             fullWidth
//                             margin="dense"
//                             value={formData.attendeesEmails || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Start Time"
//                             name="startTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.startTime ? dayjs(formData.startTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />  
//                         <TextField
//                             label="End Time"
//                             name="endTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.endTime ? dayjs(formData.endTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />
//                     </>
//                 ) : (
//                     <p>No event found.</p>
//                 )}
//             </DialogContent>
//             <DialogActions>
//                 <Button color="primary" onClick={handleSave}>Save</Button>
//                 <Button color="error" onClick={handleDelete}>Delete</Button>
//                 <Button onClick={handleClose}>Close</Button>
//             </DialogActions>
//         </Dialog>
//     );
// }





// import { useEffect, useState } from "react";
// import { 
//     Button, Dialog, DialogActions, DialogContent, DialogTitle, 
//     TextField, CircularProgress 
// } from "@mui/material";
// import dayjs from "dayjs";
// import useEvents from "../hooks/useEvents";

// export default function EventMetadataAction({ open, handleClose, eventId, refreshEvents }) {
//     const { getEventMetadataById, updateEventMetadata, deleteEventMetadata } = useEvents();
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({});

//     useEffect(() => {
//         if (!eventId) return;

//         const fetchEvent = async () => {
//             setLoading(true);
//             try {
//                 const data = await getEventMetadataById(eventId);
               
//                 setEvent(data);
//                 setFormData(data);
//             } catch (error) {
//                 console.error("Error fetching event:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEvent();
//     }, [eventId]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
    
//         // If updating startTime or endTime, ensure correct format
//         if (name === "startTime" || name === "endTime") {
//             const updatedTime = dayjs(value, "HH:mm").toISOString(); // Convert to ISO 8601 format
//             setFormData({ ...formData, [name]: updatedTime });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };
    

//     const handleSave = async () => {
//         try {
//             const updatedData = {
//                 ...formData,
//                 startTime: formData.startTime ? dayjs(formData.startTime).toISOString() : null,
//                 endTime: formData.endTime ? dayjs(formData.endTime).toISOString() : null,
//             };
    
//             await updateEventMetadata(eventId, updatedData);
//             alert("Event updated successfully!");
//             refreshEvents(); // Refresh event list after updating
//             handleClose();   // Close dialog
//             window.location.reload();
//         } catch (error) {
//             console.error("Error updating event:", error);
//             alert("Failed to update event.");
//         }
//     };
    

//     const handleDelete = async () => {
//         if (!window.confirm("Are you sure you want to delete this event?")) return;

//         try {
//             await deleteEventMetadata(eventId);
//             // alert("Event deleted successfully!");
//             refreshEvents(); // Refresh event list after deletion
//         // setEvent((prev) => prev.filter(event => event.id !== eventId));  
//             // Close dialog
//             // setEvent(null)
//             setEvent(null); 
//             handleClose(); 
//             window.location.reload();

//         } catch (error) {
//             console.error("Error deleting event:", error);
//             alert("Failed to delete event.");
//         }
//     };


    
    


//     if (!eventId) return null;

//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Edit Event</DialogTitle>
//             <DialogContent>
//                 {loading ? (
//                     <CircularProgress />
//                 ) : event ? (
//                     <>
//                         <TextField
//                             label="Title"
//                             name="title"
//                             fullWidth
//                             margin="dense"
//                             value={formData.title || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Description"
//                             name="description"
//                             fullWidth
//                             margin="dense"
//                             multiline
//                             rows={3}
//                             value={formData.description || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Venue"
//                             name="venue"
//                             fullWidth
//                             margin="dense"
//                             value={formData.venue || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Attendee Email"
//                             name="attendeesEmails"
//                             fullWidth
//                             margin="dense"
//                             value={formData.attendeesEmails || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Start Time"
//                             name="startTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.startTime ? dayjs(formData.startTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />  
//                         <TextField
//                             label="End Time"
//                             name="endTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.endTime ? dayjs(formData.endTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />
//                     </>
//                 ) : (
//                     <p>No event found.</p>
//                 )}
//             </DialogContent>
//             <DialogActions>
//                 <Button color="primary" onClick={handleSave}>Save</Button>
//                 <Button color="error" onClick={handleDelete}>Delete</Button>
//                 <Button onClick={handleClose}>Close</Button>
//             </DialogActions>
//         </Dialog>
//     );
// }






// import { useEffect, useState } from "react";
// import { 
//     Button, Dialog, DialogActions, DialogContent, DialogTitle, 
//     TextField, CircularProgress 
// } from "@mui/material";
// import dayjs from "dayjs";
// import useEvents from "../hooks/useEvents";

// export default function EventMetadataAction({ open, handleClose, eventId, refreshEvents }) {
//     const { getEventMetadataById, updateEventMetadata, deleteEventMetadata, fetchEvents } = useEvents();
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({});

//     useEffect(() => {
//         if (!eventId) return;

//         const fetchEvent = async () => {
//             setLoading(true);
//             try {
//                 const data = await getEventMetadataById(eventId);
               
//                 setEvent(data);
//                 setFormData(data);
//             } catch (error) {
//                 console.error("Error fetching event:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEvent();
//     }, [eventId]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
    
//         // If updating startTime or endTime, ensure correct format
//         if (name === "startTime" || name === "endTime") {
//             const updatedTime = dayjs(value, "HH:mm").toISOString(); // Convert to ISO 8601 format
//             setFormData({ ...formData, [name]: updatedTime });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };
    

//     const handleSave = async () => {
//         try {
//             const updatedData = {
//                 ...formData,
//                 startTime: formData.startTime ? dayjs(formData.startTime).toISOString() : null,
//                 endTime: formData.endTime ? dayjs(formData.endTime).toISOString() : null,
//             };
    
//             await updateEventMetadata(eventId, updatedData);
//             alert("Event updated successfully!");
//             refreshEvents(); // Refresh event list after updating
//             handleClose();   // Close dialog
//             window.location.reload();
//         } catch (error) {
//             console.error("Error updating event:", error);
//             alert("Failed to update event.");
//         }
//     };
    

//     // const handleDelete = async () => {
//     //     if (!window.confirm("Are you sure you want to delete this event?")) return;

//     //     try {
//     //         await deleteEventMetadata(eventId);
//     //         // alert("Event deleted successfully!");
//     //         // refreshEvents(); // Refresh event list after deletion
//     //     // setEvent((prev) => prev.filter(event => event.id !== eventId));  
//     //         // Close dialog
//     //         // setEvent(null)
//     //         console.log("event deleted",eventId);
//     //         const e =await refreshEvents();
//     //         console.log("event is",e)
//     //         setEvent(null); 
//     //         // refreshEvents();
//     //         handleClose(); 
//     //         window.location.reload();

//     //     } catch (error) {
//     //         console.error("Error deleting event:", error);
//     //         alert("Failed to delete event.");
//     //     }
//     // };


//     const handleDelete = async () => {
//         if (!window.confirm("Are you sure you want to delete this event?")) return;
    
//         try {
//             await deleteEventMetadata(eventId);
//             console.log("Event deleted", eventId);

//              await refreshEvents();
//             // await fetchEvents();             
//             // Close the modal
//             setEvent(null); // Reset selected event
//             handleClose();
//             // window.location.reload();
    
//         } catch (error) {
//             console.error("Error deleting event:", error);
//             alert("Failed to delete event.");
//         }
//     };
    
    


//     if (!eventId) return null;

//     return (
//         <Dialog open={open} onClose={handleClose}>
//             <DialogTitle>Edit Event</DialogTitle>
//             <DialogContent>
//                 {loading ? (
//                     <CircularProgress />
//                 ) : event ? (
//                     <>
//                         <TextField
//                             label="Title"
//                             name="title"
//                             fullWidth
//                             margin="dense"
//                             value={formData.title || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Description"
//                             name="description"
//                             fullWidth
//                             margin="dense"
//                             multiline
//                             rows={3}
//                             value={formData.description || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Venue"
//                             name="venue"
//                             fullWidth
//                             margin="dense"
//                             value={formData.venue || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Attendee Email"
//                             name="attendeesEmails"
//                             fullWidth
//                             margin="dense"
//                             value={formData.attendeesEmails || ""}
//                             onChange={handleChange}
//                         />
//                         <TextField
//                             label="Start Time"
//                             name="startTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.startTime ? dayjs(formData.startTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />  
//                         <TextField
//                             label="End Time"
//                             name="endTime"
//                             fullWidth
//                             margin="dense"
//                             type="time"
//                             value={formData.endTime ? dayjs(formData.endTime).format("HH:mm") : ""}
//                             onChange={handleChange}
//                         />
//                     </>
//                 ) : (
//                     <p>No event found.</p>
//                 )}
//             </DialogContent>
//             <DialogActions>
//                 <Button color="primary" onClick={handleSave}>Save</Button>
//                 {/* <Button color="error" onClick={handleDelete} >Delete</Button> */}
//                 <Button color="error" onClick={() => { handleDelete();  }}>
//   Delete
// </Button>

//                 <Button onClick={handleClose}>Close</Button>
//             </DialogActions>
//         </Dialog>
//     );
// }







import { useEffect, useState } from "react";
import { 
    Button, Dialog, DialogActions, DialogContent, DialogTitle, 
    TextField, CircularProgress 
} from "@mui/material";
import dayjs from "dayjs";
import useEvents from "../hooks/useEvents";

export default function EventMetadataAction({ open, handleClose, eventId, refreshEvents }) {
    const { getEventMetadataById, updateEventMetadata, deleteEventMetadata, fetchEvents } = useEvents();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (!eventId) return;

        const fetchEvent = async () => {
            setLoading(true);
            try {
                const data = await getEventMetadataById(eventId);
               
                setEvent(data);
                setFormData(data);
            } catch (error) {
                console.error("Error fetching event:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvent();
    }, [eventId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        // If updating startTime or endTime, ensure correct format
        if (name === "startTime" || name === "endTime") {
            const updatedTime = dayjs(value, "HH:mm").toISOString(); // Convert to ISO 8601 format
            setFormData({ ...formData, [name]: updatedTime });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };
    

    const handleSave = async () => {
        try {
            const updatedData = {
                ...formData,
                startTime: formData.startTime ? dayjs(formData.startTime).toISOString() : null,
                endTime: formData.endTime ? dayjs(formData.endTime).toISOString() : null,
            };
    
            await updateEventMetadata(eventId, updatedData);
            alert("Event updated successfully!");
            refreshEvents(); // Refresh event list after updating
            handleClose();   // Close dialog
            window.location.reload();
        } catch (error) {
            console.error("Error updating event:", error);
            alert("Failed to update event.");
        }
    };
    

    // const handleDelete = async () => {
    //     if (!window.confirm("Are you sure you want to delete this event?")) return;

    //     try {
    //         await deleteEventMetadata(eventId);
    //         // alert("Event deleted successfully!");
    //         // refreshEvents(); // Refresh event list after deletion
    //     // setEvent((prev) => prev.filter(event => event.id !== eventId));  
    //         // Close dialog
    //         // setEvent(null)
    //         console.log("event deleted",eventId);
    //         const e =await refreshEvents();
    //         console.log("event is",e)
    //         setEvent(null); 
    //         // refreshEvents();
    //         handleClose(); 
    //         window.location.reload();

    //     } catch (error) {
    //         console.error("Error deleting event:", error);
    //         alert("Failed to delete event.");
    //     }
    // };


    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this event?")) return;
    
        try {
            await deleteEventMetadata(eventId);
            console.log("Event deleted", eventId);
    
            handleClose();  // Close the modal first
            setEvent(null); // Reset event state
    
            setTimeout(() => {
                refreshEvents(); // Fetch updated events after a small delay
            }, 300);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting event:", error);
            alert("Failed to delete event.");
        }
    };
    
    
    


    if (!eventId) return null;

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogContent>
                {loading ? (
                    <CircularProgress />
                ) : event ? (
                    <>
                        <TextField
                            label="Title"
                            name="title"
                            fullWidth
                            margin="dense"
                            value={formData.title || ""}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Description"
                            name="description"
                            fullWidth
                            margin="dense"
                            multiline
                            rows={3}
                            value={formData.description || ""}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Venue"
                            name="venue"
                            fullWidth
                            margin="dense"
                            value={formData.venue || ""}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Attendee Email"
                            name="attendeesEmails"
                            fullWidth
                            margin="dense"
                            value={formData.attendeesEmails || ""}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Start Time"
                            name="startTime"
                            fullWidth
                            margin="dense"
                            type="time"
                            value={formData.startTime ? dayjs(formData.startTime).format("HH:mm") : ""}
                            onChange={handleChange}
                        />  
                        <TextField
                            label="End Time"
                            name="endTime"
                            fullWidth
                            margin="dense"
                            type="time"
                            value={formData.endTime ? dayjs(formData.endTime).format("HH:mm") : ""}
                            onChange={handleChange}
                        />
                    </>
                ) : (
                    <p>No event found.</p>
                )}
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSave}>Save</Button>
                {/* <Button color="error" onClick={handleDelete} >Delete</Button> */}
                <Button color="error" onClick={() => { handleDelete();  }}>
  Delete
</Button>

                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

