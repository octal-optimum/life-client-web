export const API_BASE_URL =
  
 //  process.env.API_BASE_URL || "http://13.127.147.39:4001/";
process.env.API_BASE_URL || "http://43.205.238.195:4001/";

export const API_PATHS = {
 "visitorslogin" :"/api/visitor/login",
 "getcurrentAffairs":"/api/visitor/currentAffairs/fetch",
 "savecurrentaffairsresponse":"api/visitor/save/current-affair-logs",
 "userFaqs":"/api/user/faq/fetch",
}