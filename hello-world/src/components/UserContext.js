import React from "react";

const UserContext = React.createContext('Codevolution')

const Userprovider = UserContext.Provider
const UserConsumer = UserContext.Consumer


export {Userprovider,UserConsumer}
export default UserContext

