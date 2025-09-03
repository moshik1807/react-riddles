export function loadToken(key:string) {
//   const token = localStorage.getItem(key);
//   return token ? JSON.parse(token) : "";
return localStorage.getItem(key);
}
export function insertToken(token: string,key:string){
  localStorage.setItem(key, token);
}