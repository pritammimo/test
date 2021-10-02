export const getFormattedDate = (dt) => {
  if (dt && dt !== undefined && dt !== "") {
    let date = new Date(dt);
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return month + "/" + day + "/" + year;
  } else {
    return "--";
  }
};
