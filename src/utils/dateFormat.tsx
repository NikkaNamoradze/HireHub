export const format = (dates:string)=>{

    const date = new Date(dates);
    const options = { day: "2-digit", month: "short" };
    const formattedDate = date.toLocaleDateString("ka-GE", options as any);
    return formattedDate as string
  }
  