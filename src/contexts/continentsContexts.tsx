import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

interface ContinentsProviderProps {
    children: ReactNode;
}
interface Continent {
    uid?: string;
    first_publication_date: string | null;
    title: string;
    subtitle: string;
    description: string;
    amount_of_countries: string;
    amount_of_languages: string;
    amount_of_cities: string;
    image_home: string | {
        url: string;
    };
    image_page: string | {
        url: string;
    };
}
interface ContinentsProps {
    continents: Continent[];
    setContinents: Dispatch<SetStateAction<Continent[]>>
}
export const ContinentsContext = createContext<ContinentsProps>({} as ContinentsProps);

export function ContinentsProvider({ children }: ContinentsProviderProps) {
    const [continents, setContinents] = useState<Continent[]>([])
    return (
        <ContinentsContext.Provider value={{ continents, setContinents }}>
            {children}
        </ContinentsContext.Provider>
    )
}

export const useContinents = () => useContext(ContinentsContext)