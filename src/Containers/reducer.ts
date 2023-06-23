const initialState = {
    name:'',
    email:'',
    phone:'',
    skills:[]
  };
  const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "SET":
        return action.obj;
      case "DELETE":
        return initialState;
      default:
        return state;
    }
  };
  
  export default formReducer;