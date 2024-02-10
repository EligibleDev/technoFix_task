import myAxios from "."

export const getAllUsers = async () => {
      const { data } = await myAxios.get('/users?limit=100')
      return data;
}

export const getUserDetails = async (id) => {
      const { data } = await myAxios.get(`/users/${id}`)
      return data;
}