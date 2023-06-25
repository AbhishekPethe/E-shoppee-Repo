export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat("en-US", {
        style : "currency",
        currency: "USD"
    }).format(number / 100)

    return newNumber
}

// export const getUniqueValues = (products , text) => {
//     return new Set(products.map((each) => {
//         return each[text];
//     }))
// }

export const getUniqueValues = (products , text) => {
    let unique = products.map((each) => {
        return each[text]
    })
    return ['all' ,  ...new Set(unique.flat(Infinity)) ]
}
