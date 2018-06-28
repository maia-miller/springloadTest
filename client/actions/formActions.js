import request from 'superagent'

// export const receiveCats = (cats) => {
//   return {
//     type: 'RECEIVE_CATS',
//     cats
//   }
// }
//
// export function getCatsRequest () {
//   return (dispatch) => {
//     request
//       .get(`/api/cats`)
//       .end((err, res) => {
//         if (err) {
//           console.error(err.message)
//           return
//         }
//         dispatch(receiveCats(res.body))
//       })
//   }
// }

export const addEmail = (cat) => {
  return {
    type: 'ADD_EMAIL',
    cat
  }
}

export function postEmail (email) {
  // if() {
  //   return true
  //   //not valid email
  // } else {

    return (dispatch) => {
      request
        .post('/api/cats')
        .send(cat)
        .end((err, res) => {
          if (err) {
            console.log(err.mesage)
            return
          }
          dispatch(addEmail(res.body))
        })
    }

  // }
}

// export const deleteCatAction = (cat) => {
//   return {
//     type: 'DELETE_CAT',
//     cat
//   }
// }
//
// export const deleteCatRequest = (cat) => {
//   return (dispatch) => {
//     request
//       .delete('/api/cats/' + cat.id)
//       .end((err, res) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         dispatch(deleteCatAction(cat))
//       })
//   }
// }

// export const editCatAction = (oldCat, newCat) => {
//   return {
//     type: 'EDIT_CAT',
//     oldCat,
//     newCat
//   }
// }
//
// export const editCatRequest = (oldCat, newCat) => {
//   return (dispatch) => {
//     request
//       .put('/api/cats/' + oldCat.id)
//       .send(newCat)
//       .end((err, res) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         dispatch(getCatsRequest())
//       })
//   }
// }
