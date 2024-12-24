"use client";

import { Payment } from "./columns";

//--------------------get table data and save to local storage for global usage
// export async function getTableData() {
//   if (
//     typeof window !== "undefined" &&
//     typeof window.localStorage !== "undefined"
//   ) {
//     if (window.localStorage.getItem("userData")) {
//       return [];
//     }
//     try {
//       const token = window.localStorage.getItem("token");
//       const response = await fetch("/getUsers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ token, dataNumber: 500 }), //sending token and number of data to get from endpoint
//       });
//       const result = (await response.json()) as any;

//       if (
//         (await response.status) === 201 &&
//         typeof window !== "undefined" &&
//         typeof window.localStorage !== "undefined"
//       ) {
//         // Save values to localStorage
//         window.localStorage.setItem("userData", JSON.stringify(result?.data));
//       }
//       return result;
//     } catch (error) {
//       console.error("Error:", error as any);
//     }
//   }
// }

export const data: Payment[] = [
  {
    id: "#1",
    place: "#1",
    creator: "susanoo_uchia",
    totalRevenue: "$3,940",
    totalVideos: "89",
  },
  {
    id: "#2",
    place: "#2",
    creator: "dravid_nkey",
    totalRevenue: "$1,940",
    totalVideos: "75",
  },
  {
    id: "#3",
    place: "#3",
    creator: "dravid_nkey",
    totalRevenue: "$1,940",
    totalVideos: "23",
  },
  {
    id: "#5",
    place: "#5",
    creator: "rando123",
    totalRevenue: "$1,940",
    totalVideos: "11",
  },
  {
    id: "#6",
    place: "#6",
    creator: "Oxq_killer",
    totalRevenue: "$1,940",
    totalVideos: "10",
  },
  {
    id: "#7",
    place: "#7",
    creator: "valo_raiOder",
    totalRevenue: "$1,940",
    totalVideos: "6",
  },
];
