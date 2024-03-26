import { Building, buildingData } from "@/app/data/building/building";
import { Door, doorData } from "@/app/data/door/door";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const doorManagerApi = createApi({
  reducerPath: "doorManagerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getDoor: builder.query<Door[], void>({
      queryFn() {
        return { data: doorData };
      },
      //needs to return a string that points to data location
    }),
    getBuilding: builder.query<Building[], void>({
      queryFn() {
        return { data: buildingData };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDoorQuery, useGetBuildingQuery } = doorManagerApi;
