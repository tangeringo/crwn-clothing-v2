import { createContext, useState, useEffect } from "react";

import { getCollectionsDataFromFirestoreDb } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCollectionsDataFromFirestoreDb();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    );
}