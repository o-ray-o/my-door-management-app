// app/types/door.ts
export interface Building {
  id: number;
  buildingName: string;
  doorName: string;
  apartmentId?: apartmentInfo;
}

type apartmentInfo = {
  floor: number;
  unit: number;
};

export const buildingData: Building[] = [
  { id: 1, buildingName: "238 Orchard Blvd", doorName: "Main Entrance" },
  { id: 2, buildingName: "19 Oxley Rd", doorName: "Main Entrance" },
  { id: 3, buildingName: "19 Oxley Rd", doorName: "Gym" },
  { id: 4, buildingName: "238 Orchard Blvd", doorName: "Garage" },
  { id: 5, buildingName: "238 Orchard Blvd", doorName: "Entrance" },
  { id: 6, buildingName: "238 Orchard Blvd", doorName: "Entrance" },
  { id: 7, buildingName: "19 Oxley Rd", doorName: "Entrance" },
  { id: 8, buildingName: "19 Oxley Rd", doorName: "Entrance" },
];
