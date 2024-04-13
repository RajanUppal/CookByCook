import { createContext, useState, useContext } from "react";

const ChefContext = createContext()

const ChefProvider=({ children }) => {
    const [Chef, setChef] = useState(null)
    return (
        <ChefContext.Provider value = {{ Chef, setChef}}>
            {
                children
            }
        </ChefContext.Provider>
    )
}


const useChefContext = ()=> {
    return useContext(ChefContext)
}

export { ChefProvider, useChefContext }