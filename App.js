import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./src/screens/SearchScreen";
import ShowResultsScreen from "./src/components/ShowResultsScreen";

// const navigator = createStackNavigator({
//   Search: SearchScreen,
//   ShowResults: ShowResultsScreen
// }, {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'Business Search'
//   }
// });

// export default createAppContainer(navigator);

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: " Business Search"}}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ShowResults" component={ShowResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}