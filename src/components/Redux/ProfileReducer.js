const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
    postData: [
        { id: 1, message: 'Hi,how are you?', likeCount: 54 },
        { id: 2, message: "It's my first post", likeCount: 67 }
    ],
    newPostText: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0
            }
            let stateCopy = { ...state };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {

            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer;