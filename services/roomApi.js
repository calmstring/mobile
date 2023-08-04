import { createApi } from "@reduxjs/toolkit/query/react";
import apiBaseQuery from "@api/calmstring/rtkQuery";

export const roomApi = createApi({
  reducerPath: "calmstring/api/rooms/",
  baseQuery: apiBaseQuery({ baseUrl: "rooms/" }),
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => ({
        url: "",
        method: "get",
      }),
    }),
    roomDetail: builder.query({
      query: (uuid) => ({
        url: `${uuid}/`,
        method: "get",
      }),
    }),
  }),
});

export const { useGetRoomsQuery, useRoomDetailQuery } = roomApi;
