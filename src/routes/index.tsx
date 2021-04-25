import React from 'react';
import StackRoutes from './stack.routes';
import { NavigationContainer } from '@react-navigation/native';

const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
);

export default Routes;