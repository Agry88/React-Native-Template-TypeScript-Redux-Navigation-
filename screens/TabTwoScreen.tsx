import { StyleSheet , Text , View } from 'react-native';
import { useSelector } from "react-redux";

export default function TabTwoScreen() {
  const counter1 = useSelector((state: any) => state.counter.counter1);
  const counter2 = useSelector((state: any) => state.counter.counter2);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter value is : {counter1}</Text>
      <Text style={styles.title}>Counter value is : {counter2}</Text>
      <Text style={styles.title}>Tab Two</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
