// AIzaSyCir1upxTVNH66qFKb9X5yFBqBZE1rZ60w
export const API_KEY = "AIzaSyCir1upxTVNH66qFKb9X5yFBqBZE1rZ60w";

export const value_converter = (value) => {
  if(value>=1000000){
    return Math.floor(value/1000000)+"M";
  }
  else if(value>=1000){
    return Math.floor(value/1000)+"K"
  }
  else{
    return value
  }
}