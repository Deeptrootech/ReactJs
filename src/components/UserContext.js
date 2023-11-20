import React from "react";

const UserContext = React.createContext("This is Default Value..");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
