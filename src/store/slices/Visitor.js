import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import visitorSevice from "../../services/VisitorSevice";

export const visitorsLogin = createAsyncThunk(
  "Visitors/login",
  async (item, thunkAPI) => {
    try {
      const data = await visitorSevice.visitorLogin(item);
      return { user: data };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue({ message });
    }
  }
);

export const GetCurrentAffairs = createAsyncThunk(
    "Visitors/getcurrentaffairs",
    async (id, thunkAPI) => {
      try {
        const data = await visitorSevice.getCurrentAffairs(id);
        return { user: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue({ message });
      }
    }
  );


const initialState = {
    loading: false,
    error: "",
    user:  null,
    isLoggedIn: false,
  };
  
  const visitorSlice = createSlice({
    name: "Visitors",
    initialState,
    
});
      
      const { reducer } = visitorSlice;
export default reducer;
