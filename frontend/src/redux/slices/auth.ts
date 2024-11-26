import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
import IUserModel from "../../models/UserModel";
import axios from "axios";
import IAuthResponse from "../../models/responses/AuthResponse";
import { API_URL } from "../../axioses/authAxios";

type TStatus = "loading" | "loaded" | "error";

interface IAuthStateSlice {
  user: IUserModel;
  status: TStatus;
  isAuth: boolean;
}

const initialState: IAuthStateSlice = {
  user: {} as IUserModel,
  status: "loading",
  isAuth: false,
};

interface ILoginParams {
  email: string;
  password: string;
}

interface IRegistrationParams {
  username: string;
  email: string;
  password: string;
}

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params: ILoginParams) => {
    const { data } = await AuthService.login(params.email, params.password);

    return data;
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: IRegistrationParams) => {
    const { data } = await AuthService.registration(
      params.username,
      params.email,
      params.password
    );

    return data;
  }
);

export const fetchLogout = createAsyncThunk("auth/fetchLogout", async () => {
  await AuthService.logout();

  localStorage.removeItem("token");
});

export const fetchCheckAuth = createAsyncThunk(
  "auth/fetchCheckAuth",
  async () => {
    const { data } = await axios.get<IAuthResponse>(
      `${API_URL}/users/auth/refresh`,
      { withCredentials: true }
    );

    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.user = {} as IUserModel;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.accessToken);

        state.user = action.payload.user;
        state.status = "loaded";
        state.isAuth = true;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.user = {} as IUserModel;
        state.status = "error";
        state.isAuth = false;
      })

      //-----------------------------------------------------

      .addCase(fetchRegister.pending, (state) => {
        state.user = {} as IUserModel;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.accessToken);

        state.user = action.payload.user;
        state.status = "loaded";
        state.isAuth = true;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.user = {} as IUserModel;
        state.status = "error";
        state.isAuth = false;
      })

      //-----------------------------------------------------

      .addCase(fetchLogout.pending, (state) => {
        state.user = {} as IUserModel;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(fetchLogout.fulfilled, (state, _) => {
        state.user = {} as IUserModel;
        state.status = "loaded";
        state.isAuth = false;
      })
      .addCase(fetchLogout.rejected, (state) => {
        state.user = {} as IUserModel;
        state.status = "error";
        state.isAuth = false;
      })

      //-----------------------------------------------------

      .addCase(fetchCheckAuth.pending, (state) => {
        state.user = {} as IUserModel;
        state.status = "loading";
        state.isAuth = false;
      })
      .addCase(fetchCheckAuth.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.accessToken);

        state.user = action.payload.user;
        state.status = "loaded";
        state.isAuth = true;
      })
      .addCase(fetchCheckAuth.rejected, (state) => {
        state.user = {} as IUserModel;
        state.status = "error";
        state.isAuth = false;
      });
  },
});

//export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
