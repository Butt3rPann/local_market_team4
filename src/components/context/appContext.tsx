
import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const useAddContext = () => {
    
    const context = useContext(AppContext)

    if (context === undefined) {
        throw new Error('AppContext must be within appContextProvider!')
    }
    return context
}

const AppContextProvider = ({children}) => {
    
    const [favorite, setFavorite] = useState([])
    

    const addToFavorite = (product) => {
        const oldFav = [...favorite]
        const newFav = oldFav.concat(product)

        setFavorite(newFav)
    }

    const removeFromFavorite = (id) => {
        const oldFav = [...favorite]
        const newFav = oldFav.filter((product) => product.id !== id);

        setFavorite(newFav)
    }

    return (
        <AppContext.Provider value = {{favorite, addToFavorite, removeFromFavorite}}>
            {children}
        </AppContext.Provider>
    )


}

export default AppContextProvider


