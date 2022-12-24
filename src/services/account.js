const success = {
  status: 200,
  data: 'Success!',
}

export const createAccount = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(response, response.data)

  return { ...success }
}
