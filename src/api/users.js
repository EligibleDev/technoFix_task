import myAxios from "."

export const getAllUsers = async (query, skip) => {
      const { data } = await myAxios.get(`/users/search?q=${query}&limit=9&skip=${skip}`)
      return data;
}

export const getUserDetails = async (id) => {
      const { data } = await myAxios.get(`/users/${id}`)
      return data;
}

export const addUser = async (user) => {
      const { data } = await myAxios.post('/users/add', user);
      return data;
}

export const uploadImage = async (image) => {
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await myAxios.post(
            `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgBbApiKey}`,
            formData
      );

      return data;
};