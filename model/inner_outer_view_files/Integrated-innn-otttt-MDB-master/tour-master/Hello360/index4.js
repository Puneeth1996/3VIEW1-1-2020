import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
} from 'react-360';

// If your background is dynamic, such as in a multi-room environment, you'll want to control it from your React application. This is possible through the Environment module.



export default class Hello360 extends React.Component {
// Our component will keep track of this state
state = {
  count: 0,
};

// This method increments our count, triggering a re-render
_incrementCount = () => {
  this.setState({count: this.state.count + 1});
};

// Once the component mounts, run the increment method every second
// componentDidMount() {
//   setInterval(this._incrementCount, 1000);
// }

render() {
  // Set the background to a 360 or 180 image 
  // Environment.setBackground(
  //   asset([('right.jpg'),('left.jpg'),('top.jpg'),('bottom.jpg'),('back.jpg'),('front.jpg')]),
  //   {format: '2D'}, /* one of the formats mentioned above */
  // );

  // Environment.setBackground(
  //   asset('front.jpg'),
  //   {format: '2D'}, /* one of the formats mentioned above */
  // );
  return (
  <View style={styles.panel}>
    <View style={styles.greetingBox}>
      <Text style={styles.greeting}>
        Welcome to React 360
      </Text>
    </View>
  </View>
  );
}
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#0ad',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
