import React from 'react';

import AuthRoutes from './tab.routes';
import { Welcome } from '../pages/Welcome';
import { PlantSave } from '../pages/PlantSave';
import { Confirmation } from '../pages/Confirmation';
import { UserIdentfication } from '../pages/UserIdentification';

import { createStackNavigator } from '@react-navigation/stack';

import colors from '../../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white
            }
        }}    
    >
        <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen 
            name="UserIdentfication"
            component={UserIdentfication}
        />

        <stackRoutes.Screen 
            name="Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen 
            name="PlantSelect"
            component={AuthRoutes}
        />

        <stackRoutes.Screen 
            name="PlantSave"
            component={PlantSave}
        />

        <stackRoutes.Screen 
            name="MyPlants"
            component={AuthRoutes}
        />
    </stackRoutes.Navigator>
)

export default AppRoutes;