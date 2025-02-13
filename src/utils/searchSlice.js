/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { actions, reducer } = searchSlice;
export const { cacheResults } = actions;
export default reducer;

/**
 *
 * Cache:
 * TC to search in an array = O(n)
 * [i, ip, iph, ipho, iphon, iphone]
 *
 * TC to search in a object(HashMap) = O(1)
 * {
 *   i,
 *   ip,
 *   iph,
 *   ipho,
 *   iphon,
 *   iphone
 * }
 */



/**
 * 
 * The search i have created is using : 
 * 1. Live API
 * 2. Debouncing
 * 3. Caching
 * which is not a small feature and not a normal search bar.
 */