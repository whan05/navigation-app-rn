import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { Ionicon } from '../components/Shared/Ionicon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () =>  {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        sceneStyle: {
          backgroundColor: globalColors.background,
        },
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => <Ionicon name='accessibility-outline' color={color} />,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => <Ionicon name='airplane-outline' color={color} />,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => <Ionicon name='bar-chart-outline' color={color}/>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
}