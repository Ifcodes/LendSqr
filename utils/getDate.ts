export const getDate = (date: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const joinedDate = new Date(date);
  const month = joinedDate.getMonth();
  const day = joinedDate.getDay();
  const year = joinedDate.getFullYear();
  let hour = joinedDate.getHours();
  const meridian = hour > 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  const minute = joinedDate.getMinutes();

  const dateJoined = `${months[month]} ${day}, ${year} ${hour}:${minute} ${meridian}`;

  return dateJoined;
};
