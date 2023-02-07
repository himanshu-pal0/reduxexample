
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Alert,
  Linking,
  View,
  TouchableOpacity,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import {hitProfileAPI} from '../../action/profileapi';
class Albumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    try {
      this.props.hitProfileAPI();
    } catch (error) {
      console.log('Error in Fetch Movies List' + error);
    }
  };

  render() {
    const {data} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View
              style={{
                width: '100%',
                height: 50,
                borderTopColor: index === 0 ? 'white' : 'white',
                borderBottomColor: 'black',
                borderWidth: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
                marginTop: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <Text>Please wait...</Text>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  data: state.profilereducer.data,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      hitProfileAPI: hitProfileAPI,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Albumb);

