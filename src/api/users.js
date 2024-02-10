import myAxios from "."

export const getAllUsers = async (query) => {
      const { data } = await myAxios.get(`/users/search?q=${query}&limit=100`)
      return data;
}

export const getUserDetails = async (id) => {
      const { data } = await myAxios.get(`/users/${id}`)
      return data;
}