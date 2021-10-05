import router from 'next/router'

const errorMiddleware = (store) => (next) => action => {
  if(action.type === '/api/error') {
    try {
      const response = action.payload.data.map(item => item.messages.map(m => m))
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  return next(action)
}

export default errorMiddleware
