import React, { createContext, useContext, useState } from 'react'

export  const ContextConnect = createContext()
export const ContextAPiProvider  = ({children}) => {
    const [isloading,setIsLoading] = useState(false)
    const [filter,setfilter] = useState(" ")
    const startLoading = ()=>{
        setIsLoading(true)
    }
    const stopLoading = ()=>{
        setIsLoading(false)
    }

    const onHandleChange = (e)=>{
      setfilter(e.target.value)
    }
   
  return (
   <ContextConnect.Provider value={{ isloading, startLoading, stopLoading, filter, setfilter, onHandleChange }}>
    {children}
   </ContextConnect.Provider>
  )
}

export const useContextAPi = () => {
    return useContext(ContextConnect);
  };

// import React, { createContext, useState, useContext } from 'react';

// const LoadingContext = createContext();

// const ContextConnect = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const startLoading = () => {
//     setIsLoading(true);
//   };

//   const stopLoading = () => {
//     setIsLoading(false);
//   };

//   return (
//     <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// const useLoading = () => {
//   return useContext(LoadingContext);
// };

// export { ContextConnect, useLoading };
