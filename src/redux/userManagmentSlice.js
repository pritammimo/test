import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ApiHelperFunction } from "../helpers/apiHelper";
export const addUser = createAsyncThunk("api/users", async (formData) => {
  const response = await ApiHelperFunction({
    urlPath: "api/users",
    method: "post",
    formData: formData,
  });
  //   let data = await response?.data;
  //  let resData = response?.data;
  //  return resData;
  let resData = response?.data;
  if (resData?.status) {
    toast.success(response?.data?.message);
    return response?.data?.message;
  } else {
    return { validation: { ...resData?.validation_errors } };
  }
});
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await ApiHelperFunction({
      urlPath: "api/users",
      method: "get",
    });
    //   let data = await response?.data;
    let resData = response?.data;
    if (resData?.status) {
      return resData;
    } else {
      toast.error(resData.message);
      return { message: resData.message };
    }
  }
);
export const fetchSingleUser = createAsyncThunk(
  "user/fetchSingleUser",
  async (id) => {
    const response = await ApiHelperFunction({
      urlPath: `api/users/${id}`,
      method: "get",
    });
    //   let data = await response?.data;
    let resData = response?.data;
    if (resData?.status) {
      return resData?.data;
    } else {
      return { message: "No User found" };
    }
  }
);
const initialState = {
  addUserErrMsg: "",
  addUserMsg: "",
  userListErrMsg: "",
  userList: "",
  userErrMsg: "",
  singleUser:""
};
export const userManagementSlice = createSlice({
  name: "adminuserManagement",
  initialState,
  reducers: {
    removeAll: (state) => {
      state = initialState;
    },
    removeaddUserMsg: (state) => {
      state.addUserMsg = "";
    },
    removeUserErrMsg: (state) => {
      state.userErrMsg = "";
    },
    removeaddUserErrMsg:(state)=>{
        state.addUserErrMsg=""
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "idle";
        if (action?.payload?.validation) {
          state.addUserErrMsg = { ...action.payload.validation };
        } else {
          state.addUserMsg = action.payload;
        }
      })
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.message && action.payload.message !== "") {
          state.userListErrMsg = action.payload;
        } else {
          state.userList = action?.payload?.data;
        }
      })
      .addCase(fetchSingleUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.message && action.payload.message !== "") {
          state.userErrMsg = action.payload;
        } else {
          state.singleUser = action.payload;
        }
      });
  },
});
export const { removeAll, removeaddUserMsg, removeUserErrMsg, removeaddUserErrMsg } =
  userManagementSlice.actions;
  export default userManagementSlice.reducer;