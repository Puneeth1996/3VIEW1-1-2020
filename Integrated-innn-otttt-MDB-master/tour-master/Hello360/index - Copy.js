import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  asset,
} from 'react-360';

export default class Hello360 extends React.Component {
// Our component will keep track of this state
state = {
  count: 0,
};

// This method increments our count, triggering a re-render
_incrementCount = () => {
  // console.log("we should be changing the view/background right?")
  Environment.setBackgroundImage(
  asset('3601.jpg'),
    {format: '2D'}, /* one of the formats mentioned above */
  );
  // Environment.clearBackground()
  this.setState({count: this.state.count + 1});
};

// Once the component mounts, run the increment method every second
// componentDidMount() {
//   setInterval(this._incrementCount, 1000);
// }

render() {
  return (
    <View style={styles.panel}>
      <VrButton
        onClick={this._incrementCount}
        style={styles.greetingBox}>
        <Text style={styles.greeting}>
          {`Count: ${this.state.count}`}
        </Text>
      </VrButton>
      <OnlyImages />
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
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});


class OnlyImages extends React.Component {

  renderImages() {
    return (
      <View>
        {/* <Image source={asset('back.jpg')} /> */}
        
        <Image source={{uri: 'https://img1.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_54_990x660.jpg'}} />
      </View>
    );
  }

}


AppRegistry.registerComponent('Hello360', () => Hello360);
