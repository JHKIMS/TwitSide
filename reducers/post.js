export const originState = {
  mainPosts: [{
      id: 1,
      User: {
        id: 1,
        nickname: "random",
      },
      content: "SampleContent",
      Images: 
      [{
          src: "https://hanamon.kr/redux%EB%9E%80-%EB%A6%AC%EB%8D%95%EC%8A%A4-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC/redux-logo/",
        },
        {
          src: "https://blog.kakaocdn.net/dn/Lw8rc/btrdpsYhIXg/6YTRc0KVNqnlI5fJmMndC1/img.jpg",
        },
        {
          src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DL2L_ZtOzYsY&psig=AOvVaw0WinH3DGMQm1aRDlVYTsD_&ust=1675427278314000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDLg5Dr9vwCFQAAAAAdAAAAABB2",
        },],
      Comments: [
        {
          User: {
            nickname: "oneUser",
          },
          content: "리덕스 공부중",
        },
        {
          User: {
            nickname: "twoUser",
          },
          content: "Sns 공부중",
        },],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost ={
    id: 2,
    content: '더미데이터입니다.',
    User:{
        id: 1,
        nickname: 'Bird'
    },
    Images: [],
    Comments: [],
}

const reducer = (state = originState, action) => {
  switch (action.type) {
    case ADD_POST:
        return {
            ...state,
            mainPosts: [dummyPost, ...state.mainPosts],
            postAdded: true,
        }
    default:
      return state;
  }
};

export default reducer;
