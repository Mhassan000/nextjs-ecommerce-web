'use client';
import{ createContext, useState } from 'react';

interface QuantityContextProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const QuantityContext = createContext<QuantityContextProps>({
  quantity: 1,
  setQuantity: () => {},
});

type Props = {
    children: React.ReactNode;
}
export const QuantityProvider = ({ children }: Props) => {
    const [quantity, setQuantity] = useState<number>(1);
    const value = { quantity, setQuantity };
    return (
        <>
            <QuantityContext.Provider value={value}>
                {children}
            </QuantityContext.Provider>
        </>

    )
}

// export const QuantityProvider: React.FC = ({ children }:any) => {
//   const [quantity, setQuantity] = useState<number>(1);

//   return (
//     <QuantityContext.Provider value={{ quantity, setQuantity }}>
//       {children}
//     </QuantityContext.Provider>
//   );
// };
