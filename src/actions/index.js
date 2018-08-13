import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENT } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  // Fetching a remote Resource
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENT,
    payload: response
  };
}
