 import React,{createContext,useReducer} from 'react'
 import Appreducer from  './Appreducer'
 
//  Initial State
const initialState={
    transactions:  [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

// Create COntext

export const GlobalContext= createContext(initialState);

// ProviderComponent
 export const GlobalProvider = ({children}) => {
     
    // useReducer
     const  [state, dispatch] = useReducer(Appreducer, initialState)

    //  Actions
    function deleteTransaction(id){
        dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
    }
    
    function AddTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }
     return (
         <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            AddTransaction
         }}>
              {children}
              </GlobalContext.Provider>
             

     )
 }
