import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

function MainNavigator() {

    const Tab = createBottomTabNavigator();
    
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="TabOne" component={TabOneScreen} />
                <Tab.Screen name="TabTwo" component={TabTwoScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;