import React, { createContext, useContext, useState } from 'react';
import { ProductCardProps } from '../layouts/ProductCard';

interface AppContextProps {
    favorite: ProductCardProps[];
    addToFavorite: (product: ProductCardProps) => void;
    removeFromFavorite: (id: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAddContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('AppContext must be within AppContextProvider!');
    }

    return context;
};

const AppContextProvider: React.FC<any> = ({ children }) => {
    const [favorite, setFavorite] = useState<ProductCardProps[]>([]);

    const addToFavorite = (product: ProductCardProps) => {
        const oldFav = [...favorite];
        const newFav = oldFav.concat(product);
        setFavorite(newFav);
    };

    const removeFromFavorite = (id: string) => {
        const oldFav = [...favorite];
        const newFav = oldFav.filter((product) => product.id !== +id);
        setFavorite(newFav);
    };

    return (
        <AppContext.Provider value={{ favorite, addToFavorite, removeFromFavorite }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
