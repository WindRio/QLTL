import { REST_API_METHOD as METHOD, BASE_URL } from "./apisConfig";

const API_SCHEME = {
  GET_DATA: {
    url: `${BASE_URL}/folder/get/:id`,
    method: METHOD.GET,
  },
  UPLOAD: {
    url: `${BASE_URL}/files/uploadFile/:id`,
    method: METHOD.POST,
  },
  ADD_FOLDER: {
    url: `${BASE_URL}/folder/post`,
    method: METHOD.POST,
  },
  EDIT_FOLDER: {
    url: `${BASE_URL}/folder/put/:id`,
    method: METHOD.PUT,
  },
  EDIT_FILE: {
    url: `${BASE_URL}/files/put/:id`,
    method: METHOD.PUT,
  },
  DEL_FOLDER: {
    url: `${BASE_URL}/folder/delete`,
    method: METHOD.PUT,
  },
  DEL_FILE: {
    url: `${BASE_URL}/files/delete`,
    method: METHOD.PUT,
  },
  MOVE: {
    url: `${BASE_URL}/folder/move/:id`,
    method: METHOD.PUT,
  },
};

export default API_SCHEME;
