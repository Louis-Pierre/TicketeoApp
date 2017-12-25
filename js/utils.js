
//date to yyyymmdd
function dateFormatting(d){
  d1=new Date(d)
  year=String(d1.getFullYear())
  if (d1.getMonth()+1<10){
    month="0"+String(d1.getMonth()+1)
  }
  else{
    month=String(d1.getMonth()+1)
  }
  if (d1.getDate()<10){
    day="0"+String(d1.getDate())
  }
  else{
    day=String(d1.getDate())
  }

  return year+month+day
};

//date to yyyymmdd
function dateFormatting1(d){
  d1=new Date(d)
  year=String(d1.getFullYear())
  if (d1.getMonth()+1<10){
    month="0"+String(d1.getMonth()+1)
  }
  else{
    month=String(d1.getMonth()+1)
  }
  if (d1.getDate()<10){
    day="0"+String(d1.getDate())
  }
  else{
    day=String(d1.getDate())
  }
  return year+"-"+month+"-"+day
};
