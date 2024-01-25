import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/svgs/home.svg';
import HomeInActiveIcon from '../../assets/svgs/homeInactive.svg';
import MenuIcon from '../../assets/svgs/menuInactive.svg';
import MenuActiveIcon from '../../assets/svgs/menuActive.svg';
import PersonIcon from '../../assets/svgs/person.svg';
import PersonInActiveIcon from '../../assets/svgs/personInactive.svg';
import {Platform} from 'react-native';
import {COLORS} from '../constants/theme';
import {moderateScale} from 'react-native-size-matters/extend';
import Home from '../screens/Home/Home';
import Menu from '../screens/Menu/Menu';
import Person from '../screens/Person/Person';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {NavScreenProps} from './NavTypes';
const Tab = createBottomTabNavigator();

export default function HomeBottomTabs({route}: NavScreenProps) {
  let homeIcon = (
    <HomeIcon width={moderateScale(24)} height={moderateScale(24)} />
  );

  let personIcon = (
    <PersonIcon width={moderateScale(28)} height={moderateScale(28)} />
  );

  const getTabBarStyle = () => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === 'chat') {
      homeIcon = (
        <HomeIcon width={moderateScale(24)} height={moderateScale(24)} />
      );
      personIcon = (
        <PersonInActiveIcon
          width={moderateScale(28)}
          height={moderateScale(28)}
        />
      );
      return {
        backgroundColor: COLORS.primaryTwo,
        height:
          Platform.OS === 'android' ? moderateScale(80) : moderateScale(100),
        borderColor: COLORS.primaryTwo,
      };
    } else {
      return {
        backgroundColor: COLORS.white,
        height:
          Platform.OS === 'android' ? moderateScale(80) : moderateScale(100),
      };
    }
  };

  getTabBarStyle();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: getTabBarStyle(),
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return homeIcon;
          },
        }}
        name="homeTab"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            const icon = focused ? (
              <MenuActiveIcon
                width={moderateScale(28)}
                height={moderateScale(28)}
              />
            ) : (
              <MenuIcon width={moderateScale(28)} height={moderateScale(28)} />
            );
            return icon;
          },
        }}
        name="chat"
        component={Menu}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return personIcon;
          },
        }}
        name="send"
        component={Person}
      />
    </Tab.Navigator>
  );
}
