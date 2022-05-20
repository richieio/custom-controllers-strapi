import { Axios } from "axios";

const axios = new Axios({
  baseURL: "https://strapi-custom-controller.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const MessagesAPIService = {
  find: async () => {
    const response = await axios.get("/messages");
    return JSON.parse(response.data).data;
  },

  create: async ({ data }) => {
    const response = await axios.post(
      "/messages",
      JSON.stringify({ data: data })
    );
    return JSON.parse(response.data).data;
  },

  update: async ({ id, data }) => {
    const response = await axios.put(
      `/messages/${id}`,
      JSON.stringify({ data: data })
    );
    return JSON.parse(response.data).data;
  },

  delete: async ({ id }) => {
    const response = await axios.delete(`/messages/${id}`);
    return JSON.parse(response.data).data;
  },
};

export { MessagesAPIService };
