import { createContext, useState, useContext } from "react";

const BookingOneTimeContext = createContext()

const BookingOneTimeProvider=({ children }) => {
    const [Chef, setChef] = useState(null)
    return (
        <BookingOneTimeContext.Provider value = {{ Chef, setChef}}>
            {
                children
            }
        </BookingOneTimeContext.Provider>
    )
}


const useBookingOneTimeContext = ()=> {
    return useContext(BookingOneTimeContext)
}

export { BookingOneTimeProvider, useBookingOneTimeContext }