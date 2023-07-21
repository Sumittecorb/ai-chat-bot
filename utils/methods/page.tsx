export const formattedDate = (newData: string) => {
  console.log(newData,"method")
  const date: any = new Date(newData);
  const currentDate: any = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  const sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

  let formattedDate;
  if (date.toDateString() === currentDate.toDateString()) {
    formattedDate = "Today";
  } else if (date.toDateString() === yesterday.toDateString()) {
    formattedDate = "Yesterday";
  } else if (date >= sevenDaysAgo && date < yesterday) {
    const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
    formattedDate = `${diffInDays} days ago`;
  } else {
    formattedDate = newData;
  }
  return formattedDate
};
