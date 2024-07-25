export const storeData=(data)=>{
    localStorage.setItem('id',data)
}
export const getUserData=()=>{
    localStorage.getItem('id')
}