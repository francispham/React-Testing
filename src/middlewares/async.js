/* Original Code:
export default function({ dispatch }) {
  return function(next) {
    return function(action) {

    }
  }
}
*/

// Refactor(WOW!!!):
export default ({ dispatch }) => next =>action => {

};
