import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-60057-default-rtdb.firebaseio.com/'
})