//reducers : how to do ?

const initialState = 0 ; 
const changeCount =(state = initialState , action) =>{
  switch(action.type){
    case 'INCREMENT' : return state + 2 ;
    case 'DECREMENT' : return state - 2 ;

    default : return state
  }
}

export default changeCount ; 