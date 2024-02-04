import {
  DELETE_BOOK_SUCCESS,
  GET_BOOK_FAILURE,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  POST_BOOK_SUCCESS,
} from "../actionTypes";

const initialData = {
  isLoading: false,
  isError: false,
  books: [],
};

export const reducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case GET_BOOK_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_BOOK_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_BOOK_SUCCESS: {
      return { ...state, isLoading: false, isError: false, books: payload };
    }
    case POST_BOOK_SUCCESS: {
      return { ...state, isLoading: false, isError: false };
    }

    case DELETE_BOOK_SUCCESS: {
      return {
        ...state,
        books: state.books.filter((ele) => ele.id !== payload),
      };
    }
    default:
      return state;
  }
};
