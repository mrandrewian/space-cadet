export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = value => ({
  type: INCREMENT,
  value
})

 export const decrement = value => ({
  type: DECREMENT,
  value
})
