import dayjs from "dayjs";

export const convertDateForm = (date : Date) : string => {
    const formedDay : string = dayjs(date).format("YYYY-MM-DD");
    
    return formedDay;

}