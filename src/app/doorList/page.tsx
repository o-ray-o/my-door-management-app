"use client";
import React from "react";
import {
  useGetDoorQuery,
  useGetBuildingQuery,
} from "../../../lib/features/api/doorAPI";

import { Status, Type, doorData } from "../data/door/door";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CombinedData, DoorTableData } from "../data/combinedData";
// import { buildingData } from "../data/building/building";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { viewDoor } from "../../../lib/features/reducer/doorManagementSlice";

export default function DoorList() {
  const doorData = useGetDoorQuery();
  const buildingData = useGetBuildingQuery();
  const dispatch = useDispatch();
  // console.log("doorList:", data);

  const router = useRouter();
  const handleClick = (id: number) => {
    console.log("clicked on ", id);

    dispatch(viewDoor(id));
    router.push("/doorList/${id}");
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Building Name</TableCell>
            <TableCell>Door Name</TableCell>
            {/* Additional columns as needed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {CombinedData(buildingData, doorData).map((doorData) => (
            <TableRow
              key={doorData.id}
              onClick={() => handleClick(doorData.id)}
            >
              <TableCell>{doorData.buildingName}</TableCell>
              <TableCell>{doorData.doorName}</TableCell>
              <TableCell>{doorData.connectionStatus}</TableCell>
              <TableCell>{doorData.connectionType}</TableCell>
              {/* Add more cells for additional data */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
