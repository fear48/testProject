import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import * as appActions from "../../actions/index";
import { List, ListItem, Text } from "native-base";

class Hometab extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.dispatch(appActions.fetchUsers());
  };

  handleUserPress = user => {
    this.props.dispatch(appActions.getUser(user));
    this.props.navigator.push({
      screen: "ReactNativeReduxExample.ProfilePage"
    });
  };

  render() {
    console.log(this.props.users, "USERS");
    return (
      <View>
        {this.props.isLoading && (
          <ActivityIndicator
            style={{ marginTop: 100 }}
            size="large"
            color="#0000ff"
          />
        )}
        <List>
          {this.props.users.map((user, index) => {
            return (
              <ListItem
                key={index}
                onPress={() => {
                  this.handleUserPress(user);
                }}
                style={{ marginLeft: 0, paddingLeft: 10 }}
              >
                <Text>{user.name}</Text>
              </ListItem>
            );
          })}
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = state => ({
  users: state.root.users,
  isLoading: state.root.isLoading
});

export default connect(mapStateToProps)(Hometab);
