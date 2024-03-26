import {
  useGetBuildingQuery,
  useGetDoorQuery,
} from "../../../lib/features/api/doorAPI";
import { Building } from "./building/building";
import { Door } from "./door/door";

// Function to combine building and door data
export function CombinedData(
  buildingData: Building[],
  doorData: Door[]
): DoorTableData[] {
  return buildingData.flatMap((building) => {
    const buildingDoors = doorData.filter((door) => door.id === building.id);
    return buildingDoors.map((door) => ({
      id: building.id,
      doorName: door.doorName,
      buildingName: building.buildingName,
      connectionStatus: door.connectionStatus,
      connectionType: door.connectionType,
      // Add more fields from Door and Building if needed
    }));
  });
}

// Optional: Define type for combined data (refer to door.ts example)
export interface DoorTableData {
  id: number;
  buildingName: string;
  doorName: string;
  connectionStatus: string; // Assuming it's a string from your data
  connectionType: string;
  // Add more fields from Door and Building if needed
}
