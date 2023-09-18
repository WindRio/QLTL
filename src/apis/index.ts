import createApi from "../utils/createApi.js";
import API_SCHEME from "./demoScheme.js";

export const FolderApi = {
  getData: createApi(API_SCHEME.GET_DATA),
  uploadFile: createApi(API_SCHEME.UPLOAD),
  addFolder: createApi(API_SCHEME.ADD_FOLDER),
  editFolder: createApi(API_SCHEME.EDIT_FOLDER),
  editFile: createApi(API_SCHEME.EDIT_FILE),
  delFolder: createApi(API_SCHEME.DEL_FOLDER),
  delFiles: createApi(API_SCHEME.DEL_FILE),
  move: createApi(API_SCHEME.MOVE),
};
