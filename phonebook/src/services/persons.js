import axios from "redaxios";
const baseUrl = "/api/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

function deleteOne(id) {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
  getAll,
  create,
  update,
  deleteOne
};
