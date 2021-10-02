import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  ApiHelperFunction,
  setLocaleStorage,
  setSessionStorage,
} from "../helpers/apiHelper";
export const signIn = createAsyncThunk("user/signIn", async (formData) => {
  const response = await ApiHelperFunction({
    urlPath: "api/users/login",
    method: "post",
    formData: formData,
  });
  //   let data = await response?.data;
  let resData = response?.data;
  if (resData?.status) {
    if (localStorage.getItem("remember_me") === "true") {
      setLocaleStorage("token", resData.token);
      setLocaleStorage("userData", JSON.stringify(resData?.data));
    } else {
      setSessionStorage("token", resData.token);
      setSessionStorage("userData", JSON.stringify(resData?.data));
    }
    toast.success("Login successful");
    return resData?.data;
  } else {
    toast.error(resData.message);
    return { message: resData.message };
  }
});
export const userDetails = createAsyncThunk("user/userDetails", async () => {
  const response = await ApiHelperFunction({
    urlPath: "api/users/profile",
    method: "get",
  });
  //   let data = await response?.data;
  let resData = response?.data;
  if (resData?.status) {
    if (localStorage.getItem("remember_me") === "true") {
      setLocaleStorage("userData", JSON.stringify(resData?.data));
    } else {
      setSessionStorage("userData", JSON.stringify(resData?.data));
    }
    return resData?.data;
  } else {
    toast.error(resData.message);
    return { message: resData.message };
  }
});
const initialState = {
  status: "idle",
  userData: "",
  userDataErrMsg: "",
};
export const mainSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeAll: (state) => {
      state = initialState;
    },
    signOut: (state) => {
      state.userData = "";
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.message && action.payload.message !== "") {
          state.userDataErrMsg = action.payload;
        } else {
          state.userData = action.payload;
        }
      })
      .addCase(userDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.status = "idle";
        if (action.payload.message && action.payload.message !== "") {
          state.userDataErrMsg = action.payload;
        } else {
          state.userData = action.payload;
        }
      })
     
      
  },
});

export const {
  removeAll,
  signOut,
} = mainSlice.actions;

export default mainSlice.reducer;