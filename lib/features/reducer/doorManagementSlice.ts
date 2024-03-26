import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DoorAggregated {
  id: number;
  doorName: string;
  buildingName: string;
  connectionType: "Wired" | "Wireless";
  connectionStatus: "Online" | "Offline";
  apartmentId?: number; // Optional apartment ID
}

const initialState: DoorAggregated[] = [
  {
    id: 1,
    doorName: "Main Entrance",
    buildingName: "238 Orchard Blvd",
    connectionStatus: "Online",
    connectionType: "Wired",
  },
];
export const doorSlice = createSlice({
  name: "door",
  initialState,
  reducers: {
    viewDoor: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      // in order to use filter DoorAggregated has to be an array
      return state.filter((door: DoorAggregated) => door.id === id);
    },
    postId: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const currentState = state.find((door: DoorAggregated) => door.id === id);
      return state;
    },
  },
});

export const { viewDoor, postId } = doorSlice.actions;

export default doorSlice.reducer;
