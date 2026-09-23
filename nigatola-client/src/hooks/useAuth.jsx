import React, { use } from 'react';
import AuthProvider from '../router/AuthProvider';
import AuthContext from '../router/AuthContext';

const useAuth = () => {
    const authContext = use(AuthContext)
    return authContext
};

export default useAuth;