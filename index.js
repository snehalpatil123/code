export const withdraw=(ammount)=>{
    return{
  type:"Withdraw",
  payload:ammount
    }
}
export const deposite=(ammount)=>{
    return{
  type:"Deposite",
  payload:ammount
    }
}