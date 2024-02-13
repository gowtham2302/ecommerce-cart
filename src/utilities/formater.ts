const CURR_FORMAT = new Intl.NumberFormat(undefined , {
    currency:"INR" , style: "currency"
})

export function formatCurrency(number : number){
    return CURR_FORMAT.format(number)
}