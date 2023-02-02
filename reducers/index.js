const originState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
}
//Action Creator
export const loginAction = (data) =>{
    return{
        type: 'LOG_IN',
        data,
    }
}
export const logoutAction = () =>{
    return{
        type: 'LOG_OUT',
    }
}


//Reducer : (이전상태, 액션)으로 다음상태를 만들어내는 역할을 한다.
const rootReducer = (state = originState, action) => {
    switch(action.type){
        case 'LOG_IN':
            return{
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            }
        case 'LOG_OUT':
            return{
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }
    }
};

export default rootReducer;