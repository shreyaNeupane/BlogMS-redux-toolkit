import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import axios from "axios";
import AddBlog from './../src/pages/blog/AddBlog';
import { Await } from "react-router-dom";
import API from "../src/http";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: null,
    status: null
  },
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setBlog(state, action) {
      state.data = action.payload;
    }
  },
});
export const { setStatus, setBlog } = blogSlice.actions;
export default blogSlice.reducer;

// --------------------- ADD BLOG ---------------------
export function addBlog(data) {
  return async function addBlogThunk(dispatch) {
    
    try {
        const response = await API.post("blog",data,{
            headers: {
               " Content-Type" :'multipart/form-data'
            }
        });
      if (response.status === 201) {
        
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
// ----------------- FETCH BLOG ---------------------
export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    try {
      const response = await API.get('blog')
      if (response.status === 200 && response.data.token) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
// -------------- DELETE BLOG ---------------

export function deleteBlog(id , token) {
  return async function deleteBlogThunk(dispatch) {
    try {
      const response = await API.delete(`blog/${id}`,{
        headers : {
            token : token
        }
        });
      if (response.status === 200 && response.data.blog.length > 0) {
        dispatch(setBlog(response.data.blog))
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
