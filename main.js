import { changeStatus } from "./storage.js";
import { DateTime } from "luxon";

// Specify the starting date
const startDate = DateTime.local(2023, 7, 27);

// Generate the list of dates for the next 31 days
const next31Days = Array.from({ length: 31 }, (_, index) =>
  startDate.plus({ days: index }).toFormat("yyyy-MM-dd")
);

function convertDays(date) {
  const parsedDate = DateTime.fromISO(date);

  // Format the date in dd-mm-yyyy format
  const formattedDate = parsedDate
    .toFormat("dd-MM-yyyy")
    .slice(0, 5)
    .replace("-", "/");
  return formattedDate;
}

export let convertedDays = next31Days.map(convertDays);
