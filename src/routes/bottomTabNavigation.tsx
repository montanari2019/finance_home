import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { Home } from '~/screens/Home';
import { Groups } from '~/screens/Groups';
import { User } from '~/screens/User';
import { THEME } from '~/theme/global';
import { GroupItem } from '~/screens/GroupItem';
type AuthRoutesProps = {
  home: undefined;
  user: undefined;
  groups: undefined;
  groupItem: {id: string};
};

export type AuthNavigatorRoutesPrivadeProps = BottomTabNavigationProp<AuthRoutesProps>;
export function BottomTabNavigation() {
  const iconSize = 25;

  const { Navigator, Screen } = createBottomTabNavigator<AuthRoutesProps>();

  return (
    <Navigator
      // tabBar={Home}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: THEME.COLORS.PURPLE_500,
        tabBarInactiveTintColor: THEME.COLORS.GRAY_300,
        tabBarLabelStyle: {
          marginTop: 5,
          textTransform: 'capitalize',
          fontSize: THEME.SIZES.SIZE_XSS,
        },
        tabBarStyle: {
          backgroundColor: THEME.COLORS.WHITE,
          borderTopWidth: 1,
          borderTopColor: THEME.COLORS.GRAY_50,
          height: 80,
          paddingBottom: 25,
          paddingTop: 5,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={iconSize} color={color} />
          ),
        }}
      />
      <Screen
        name="groups"
        component={Groups}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="graph" size={iconSize} color={color} />
          ),
        }}
      />

      <Screen
        name="user"
        component={User}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={iconSize} color={color} />
          ),
        }}
      />

      <Screen
        name='groupItem'
        component={GroupItem}
        options={{
          tabBarButton: () => null
        }}
      />
    </Navigator>
  );
}
