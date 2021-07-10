import React from "react"

const logincontexts=React.createContext()
const productprovider=logincontexts.Provider
const productconsumer=logincontexts.Consumer

export {productconsumer,productprovider}
export default logincontexts