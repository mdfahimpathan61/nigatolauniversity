import React, { useState } from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {

    const [dark, setDark] = useState(false);

    const value = {
        dark,
        setDark
    }
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthProvider;