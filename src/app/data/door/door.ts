// app/types/door.ts
export interface Door {
  id: number;
  doorName: string;
  // apartmentId?: apartmentInfo;
  connectionStatus: Status;
  connectionType: Type;
  // timeLastUpdated: number;
}

export type Status = "Online" | "Offline";
export type Type = "Wired" | "Wireless";

export const doorData: Door[] = [
  {
    id: 1,
    doorName: "Main Entrance",
    connectionStatus: "Online",
    connectionType: "Wired",
  },
  {
    id: 2,
    doorName: "Main Entrance",
    connectionStatus: "Online",
    connectionType: "Wired",
  },
  {
    id: 3,
    doorName: "Gym",
    connectionStatus: "Offline",
    connectionType: "Wired",
  },
  {
    id: 4,
    doorName: "Garage",
    connectionStatus: "Online",
    connectionType: "Wired",
  },
  {
    id: 5,
    doorName: "Entrance",
    connectionStatus: "Online",
    connectionType: "Wireless",
  },
  {
    id: 6,
    doorName: "Entrance",
    connectionStatus: "Online",
    connectionType: "Wireless",
  },
  {
    id: 7,
    doorName: "Entrance",
    connectionStatus: "Online",
    connectionType: "Wireless",
  },
  {
    id: 8,
    doorName: "Entrance",
    connectionStatus: "Online",
    connectionType: "Wireless",
  },
];
